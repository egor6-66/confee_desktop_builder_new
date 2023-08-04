import { useQueryClient } from '@tanstack/react-query';
import produce from 'immer';
import { useEffect } from 'react';

import { useWebSocket } from 'shared/hooks';

import { SocketIn, SocketOut } from './types';
import { Chat } from '../../chat/model/types';

function messageGateway() {
    const { onMessage } = useWebSocket<SocketIn, SocketOut>();

    const queryClient = useQueryClient();
    useEffect(() => {
        onMessage('MessageCreated', (socketData) => {
            queryClient.setQueryData(['get-messages', socketData.data.message.chat_id], (cacheData: any) => {
                if (!cacheData?.pages.length) return cacheData;
                return produce(cacheData, (draft: any) => {
                    draft.pages[0].data.data.unshift(socketData.data.message);
                });
            });
            queryClient.setQueryData(['get-chats'], (cacheData: any) => {
                if (!cacheData?.data?.data.length) return cacheData;
                return produce(cacheData, (draft: any) => {
                    draft.data.data = draft?.data?.data.map((chat: Chat) => {
                        if (socketData.data.message.chat_id === chat.id) return { ...chat, last_message: socketData.data.message };
                        return chat;
                    });
                });
            });
        });
    }, []);
}

export default messageGateway;
