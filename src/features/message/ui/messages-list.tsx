import React, { useEffect } from 'react';

import { chatApi, chatService, useChatStore, chatProxy } from 'entities/chat';
import { messageProxy, messageApi, MessagesListView, useMessageStore, messageTypes } from 'entities/message';
import { ViewerService } from 'entities/viewer';
import { useRouter } from 'shared/hooks';

type Props = {};

function MessageList(props: Props) {
    const { params } = useRouter();

    const chatId = Number(params.chat_id);
    const viewerId = ViewerService.getId();

    const { data: chatData } = chatApi.handleGetChat({ chatId: Number(params.chat_id) });

    const { mutate: handleSendReaction } = messageApi.handleSendReaction();

    const {
        data: messageData,
        hasNextPage,
        hasPreviousPage,
        fetchPreviousPage,
        fetchNextPage,
        isFetching,
    } = messageApi.handleGetMessages({ chatId, initialPage: chatService.getInitialPage(chatData) });

    const getPrevPage = () => {
        // readMessage(messageData?.pages[messageData?.pages.length - 1].id || 0);
        // hasPreviousPage && !isFetching && fetchPreviousPage().then();
    };
    const getNextPage = () => {
        hasNextPage && !isFetching && fetchNextPage().then();
    };

    return (
        <>
            <MessagesListView
                chat={chatData}
                messages={messageData?.pages.map((message: any, index: number) => messageProxy(messageData?.pages[index - 1], message))}
                getNextPage={getNextPage}
                getPrevPage={getPrevPage}
            />
        </>
    );
}

export default MessageList;
