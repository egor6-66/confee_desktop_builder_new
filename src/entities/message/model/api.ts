import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import produce from 'immer';

import { appApi } from 'entities/app';
import { axiosClient } from 'shared/configs';
import { useWebSocket } from 'shared/hooks';

import { File, Message, MessageProxy, MessageType, SocketOut } from './types';
import { httpHandlers } from '../../../shared/lib';
import { Chat } from '../../chat/model/types';
import { messages_limit } from '../lib/constants';
import mockMessage from '../lib/mock';

class MessageApi {
    private pathPrefix = '/api/v2/chats';

    socket = useWebSocket<any, SocketOut>();

    handleGetMessages({ initialPage, chatId }: { initialPage: number | undefined | null; chatId: number }) {
        return useInfiniteQuery(
            ['get-messages', chatId],
            ({ pageParam }) => {
                return axiosClient.get(`${this.pathPrefix}/${chatId}/messages`, {
                    params: {
                        page: pageParam || initialPage,
                        per_page: messages_limit,
                    },
                });
            },
            {
                getPreviousPageParam: (lastPage, pages) => {
                    const { current_page } = lastPage?.data.meta;
                    return current_page > 1 ? current_page - 1 : undefined;
                },
                getNextPageParam: (lastPage, pages) => {
                    const { current_page, last_page } = lastPage?.data.meta;
                    return current_page < last_page ? current_page + 1 : undefined;
                },
                select: (data) => {
                    return {
                        pages: data.pages,
                        pageParams: [...data.pageParams].reverse(),
                    };
                },
                enabled: !!chatId && !!initialPage,
                staleTime: Infinity,
            }
        );
    }

    handleSearchMessages({ chatId, text }: { text: string; chatId: number }) {
        return useInfiniteQuery(
            ['search-messages', chatId, text],
            ({ pageParam }) => {
                return axiosClient.get(`${this.pathPrefix}/${chatId}/messages`, {
                    params: {
                        page: pageParam || 1,
                        text,
                    },
                });
            },
            {
                getNextPageParam: (lastPage, pages) => {
                    const { current_page, last_page } = lastPage?.data.meta;
                    return current_page < last_page ? current_page + 1 : undefined;
                },
                select: (data) => {
                    return {
                        pages: data.pages,
                        pageParams: data.pageParams,
                    };
                },
                enabled: !!chatId,
                staleTime: Infinity,
            }
        );
    }

    handleSendTextMessage() {
        const queryClient = useQueryClient();
        const viewerData: any = queryClient.getQueryData(['get-viewer']);
        return useMutation(
            (data: { text: string; chatId: number; params?: { reply_to_message_id?: number }; replyMessage?: MessageProxy | null }) =>
                axiosClient.post(`${this.pathPrefix}/${data.chatId}/messages`, { text: data.text, message_type: 'text' }, { params: data.params }),
            {
                onMutate: async (data) => {
                    queryClient.setQueryData(['get-messages', data.chatId], (cacheData: any) => {
                        const message = mockMessage({ text: data.text, author: viewerData?.data.data, reply: data.replyMessage });
                        return produce(cacheData, (draft: any) => {
                            draft.pages[0].data.data.unshift(message);
                        });
                    });
                },
            }
        );
    }

    handleSendFileMessage() {
        const queryClient = useQueryClient();
        const viewerData: any = queryClient.getQueryData(['get-viewer']);

        return useMutation(
            (data: {
                files: FormData | undefined | null;
                chatId: number;
                params?: { reply_to_message_id?: number };
                replyMessage?: MessageProxy | null;
                filesForMock: File[];
                filesType: MessageType;
            }) => axiosClient.post(`${this.pathPrefix}/${data.chatId}/file_message`, data.files, { params: data.params }),
            {
                onMutate: async (data) => {
                    queryClient.setQueryData(['get-messages', data.chatId], (cacheData: any) => {
                        const message = mockMessage({
                            text: '',
                            author: viewerData?.data.data,
                            files: data.filesForMock,
                            type: data.filesType,
                            reply: data.replyMessage,
                        });
                        return produce(cacheData, (draft: any) => {
                            draft.pages[0].data.data.unshift(message);
                        });
                    });
                },
            }
        );
    }

    handleGetMessageOrder = (data: { chatId: number | undefined; messageId: number | null | undefined }) => {
        return useQuery(
            ['get-message-order', data.chatId, data.messageId],
            () => axiosClient.get(`${this.pathPrefix}/${data.chatId}/message/${data.messageId}`, { params: { per_page: messages_limit } }),
            {
                staleTime: Infinity,
                enabled: !!data.chatId && !!data.messageId,
                select: (data) => {
                    const res = httpHandlers.response<{ data: Message }>(data);
                    return res.data?.data;
                },
            }
        );
    };

    handleForwardMessages() {
        const queryClient = useQueryClient();
        const viewerData: any = queryClient.getQueryData(['get-viewer']);
        return useMutation(
            (data: { messages: Message[]; chatId: number }) =>
                axiosClient.post(`${this.pathPrefix}/${data.chatId}/messages/forward`, { forward_from_message_ids: data.messages.map((i) => i.id) }),
            {
                onMutate: (data) => {
                    queryClient.setQueryData(['get-messages', data.chatId], (cacheData: any) => {
                        const messages = data.messages.map((i: any) => {
                            return mockMessage({
                                text: i.text,
                                author: i.author,
                                files: i.files,
                                type: i.type,
                                reply: i.reply_to_message,
                                forward: i,
                            });
                        });
                        return produce(cacheData, (draft: any) => {
                            draft.pages[0].data.data = [...messages, ...draft.pages[0].data.data];
                        });
                    });
                },
            }
        );
    }

    handleEditTextMessage() {
        const queryClient = useQueryClient();
        return useMutation(
            (data: { chatId: number; messageId: number; text: string }) =>
                axiosClient.post(`${this.pathPrefix}/${data.chatId}/messages/${data.messageId}`, { text: data.text }),
            {
                onMutate: async (data) => {
                    queryClient.setQueryData(['get-messages', data.chatId], (cacheData: any) => {
                        return produce(cacheData, (draft: any) => {
                            if (draft?.pages?.length) {
                                draft?.pages.forEach((page: any) => {
                                    if (page?.data?.data.length) {
                                        page.data.data = page.data?.data.map((msg: MessageProxy) => {
                                            if (msg.id === data.messageId) return { ...msg, text: data.text, is_edited: true };
                                            return msg;
                                        });
                                    }
                                });
                            }
                        });
                    });
                },
            }
        );
    }

    handleDeleteMessage() {
        const queryClient = useQueryClient();
        return useMutation(
            (data: { messageIds: number[]; fromAll: boolean; chatId: number }) =>
                axiosClient.delete(`${this.pathPrefix}/${data.chatId}/messages`, { data: { fromAll: data.fromAll, messageIds: data.messageIds } }),
            {
                onMutate: async (data) => {
                    queryClient.setQueryData(['get-messages', data.chatId], (cacheData: any) => {
                        return produce(cacheData, (draft: any) => {
                            if (draft?.pages?.length) {
                                draft?.pages.forEach((page: any) => {
                                    if (page?.data?.data.length) {
                                        page.data.data = page.data?.data.filter((msg: MessageProxy) => !data?.messageIds?.includes(msg.id));
                                    }
                                });
                            }
                        });
                    });
                },
            }
        );
    }

    handleReadMessage() {
        const queryClient = useQueryClient();
        return {
            mutate: (data: { chat_id: number; message_id: number }) => {
                data.message_id && this.socket.sendMessage('MessageRead', data);
                queryClient.setQueryData(['get-messages', data.chat_id], (cacheData: any) => {
                    if (!cacheData?.pages?.length) return cacheData;
                    return produce(cacheData, (draft: any) => {
                        draft?.pages?.forEach((page: any) => {
                            page?.data?.data.forEach((msg: any) => {
                                if (msg.id <= data.message_id) {
                                    msg.is_read = true;
                                }
                            });
                        });
                    });
                });
            },
        };
    }

    handleMessageTyping = () => {
        return {
            mutate: (data: { chatId: number }) => ({
                mutate: this.socket.sendMessage('Typing', { chat_id: data.chatId }),
            }),
        };
    };

    handleSendReaction() {
        return useMutation((data: { chatId: number; messageId: number; reaction: string }) =>
            axiosClient.post(`${this.pathPrefix}/${data.chatId}/message/${data.messageId}`, { reaction: data.reaction })
        );
    }
}

export default new MessageApi();
