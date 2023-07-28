import { useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

import { AppTypes } from 'entities/app';
import { ChatHeaderView, ChatService, ChatApi, ChatTypes, useChatStore, ChatProxy } from 'entities/chat';
import { useRouter } from 'shared/hooks';

function ChatHeader() {
    const { params, navigate } = useRouter();

    const { data: chatData } = ChatApi.handleGetChat({ chatId: params.chat_id });

    const setOpenRightSidebar = useChatStore.use.setOpenRightSidebar();

    const clickChatCard = () => {
        setOpenRightSidebar(true);
    };

    return <ChatHeaderView back={() => navigate('/chats')} clickChatCard={clickChatCard} chat={chatData} />;
}

export default ChatHeader;