import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import { ChatApi, ChatService, useChatStore } from 'entities/chat';
import { messageProxy, MessageApi, MessagesListView, useMessageStore, MessageTypes } from 'entities/message';
import { ChatsListModal, MediaContentModal } from 'entities/modal';
import { ViewerService } from 'entities/viewer';

import { Modal, useModal } from '../../../shared/ui';

type Props = {};

function MessageList(props: Props) {
    const params = useParams();

    const chatId = Number(params.chat_id);
    const viewerId = ViewerService.getId();

    const modalConfirmDelete = useModal();
    const modalChatsList = useModal();
    const modalMediaContent = useModal();

    const socketAction = useMessageStore.use.socketAction();

    const mediaContentToSend = useMessageStore.use.mediaContentToSend();
    const messagesToDelete = useMessageStore.use.messagesToDelete();
    const messagesToForward = useMessageStore.use.messagesToForward();
    const setMediaContentToSend = useMessageStore.use.setMediaContentToSend();
    const setMessagesToDelete = useMessageStore.use.setMessagesToDelete();
    const setMessagesToForward = useMessageStore.use.setMessagesToForward();

    const selectedChats = useChatStore.use.selectedChats();
    const setSelectedChats = useChatStore.use.setSelectedChats();
    const clearSelectedChats = useChatStore.use.clearSelectedChats();

    const { data: chatsData } = ChatApi.handleGetChats();
    const chat = chatsData?.data?.find((chat) => chat.id === Number(params.chat_id));

    const { mutate: handleSendFileMessage } = MessageApi.handleSendFileMessage();
    const { mutate: handleSendReaction } = MessageApi.handleSendReaction();
    const { mutate: handleReadMessage } = MessageApi.handleReadMessage();
    const { mutate: handleDeleteMessage } = MessageApi.handleDeleteMessage();
    const { mutate: handleForwardMessages } = MessageApi.handleForwardMessages();

    const {
        data: messageData,
        hasNextPage,
        hasPreviousPage,
        fetchPreviousPage,
        fetchNextPage,
        isFetching,
    } = MessageApi.handleGetMessages({ chatId, initialPage: ChatService.getInitialPage(chat) });

    const reactionClick = (messageId: number, reaction: any) => handleSendReaction({ chatId, messageId, reaction });

    const readMessage = (messageId: number) => {
        if (chat?.pending_messages) handleReadMessage({ chat_id: chatId, messages: [messageId] });
    };

    const deleteMessages = () => {
        handleDeleteMessage({ messages: messagesToDelete.map((msg) => String(msg.id)), chatId, fromAll: true });
        setMessagesToDelete([]);
        modalConfirmDelete.close();
    };

    const getPrevPage = () => {
        readMessage(messageData?.pages[messageData?.pages.length - 1].id || 0);
        hasPreviousPage && !isFetching && fetchPreviousPage().then();
    };
    const getNextPage = () => {
        hasNextPage && !isFetching && fetchNextPage().then();
    };

    const onCloseModalChatsList = () => {
        clearSelectedChats();
        setMessagesToForward([]);
    };

    const onOkModalChatsList = () => {
        selectedChats.forEach((chat) => {
            handleForwardMessages({
                messagesIds: messagesToForward.map((i) => i.id),
                chatId: chat.id,
            });
        });
        onCloseModalChatsList();
    };

    const onOkModalMediaContent = () => {
        handleSendFileMessage({
            files: mediaContentToSend?.formData,
            chatId,
        });
        setMediaContentToSend(null);
    };

    useEffect(() => {
        if (messagesToDelete.length) modalConfirmDelete.open();
        if (messagesToForward.length) modalChatsList.open();
        if (mediaContentToSend) modalMediaContent.open();
    }, [messagesToDelete.length, messagesToForward.length, mediaContentToSend]);

    return (
        <>
            <MessagesListView
                chat={chat}
                messages={messageData?.pages.map((message: MessageTypes.Message, index: number) =>
                    messageProxy(messageData?.pages[index - 1], message, viewerId)
                )}
                getNextPage={getNextPage}
                getPrevPage={getPrevPage}
                readMessage={readMessage}
                reactionClick={reactionClick}
            />
            <Modal {...modalConfirmDelete} onOk={deleteMessages} onClose={() => setMessagesToDelete([])}>
                <div>удалить сообщение ?</div>
            </Modal>
            <Modal {...modalChatsList} onOk={onOkModalChatsList} onClose={onCloseModalChatsList}>
                <ChatsListModal chats={chatsData?.data} selectedChats={selectedChats} setSelectedChats={setSelectedChats} />
            </Modal>
            <Modal {...modalMediaContent} onOk={onOkModalMediaContent} onClose={() => setMediaContentToSend(null)}>
                <MediaContentModal type={mediaContentToSend?.type} list={mediaContentToSend?.list} />
            </Modal>
        </>
    );
}

export default MessageList;
