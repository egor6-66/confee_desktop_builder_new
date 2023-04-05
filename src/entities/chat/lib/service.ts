import { useQueryClient } from '@tanstack/react-query';

import { useEnding } from 'shared/hooks';
import { UniversalStorage } from 'shared/services';

import { messageConstants } from '../../message';
import ChatApi from '../model/api';
import { Chat } from '../model/types';

class ChatService {
    getOpenChatId(): number | null {
        if (window.location.href.split('/').find((i) => ['chat'].includes(i))) {
            return Number(window.location.href.split('/')[6]);
        }
        return null;
    }

    checkIsOpenChatInfo(): boolean {
        return !!window.location.href.split('/').find((i) => ['group_chat', 'private_chat'].includes(i));
    }

    getChat(id: number) {
        const queryClient = useQueryClient();
        const data: { data: { data: Chat } } | undefined = queryClient.getQueryData(['get-chat', id]);
        return data ? data.data.data : null;
    }

    checkChatIsSubscribed(): boolean {
        return !!UniversalStorage.localStorageGet('subscribed_to_chat');
    }

    subscribeToChat(id: number) {
        const currentChatId = UniversalStorage.localStorageGet('subscribed_to_chat');
        currentChatId && ChatApi.handleUnsubscribeFromChat()(Number(currentChatId));
        ChatApi.handleSubscribeToChat()(id);
        UniversalStorage.localStorageSet('subscribed_to_chat', String(id));
    }

    unsubscribeFromChat(id: number) {
        ChatApi.handleUnsubscribeFromChat()(id);
        UniversalStorage.localStorageRemove('subscribed_to_chat');
    }

    getChatSubtitle(chat: Chat | null): string {
        if (!chat) return '';
        if (chat.is_group) {
            const word = useEnding(chat.users.length, ['участник', 'участника', 'участников']);
            return `${chat.users.length} ${word}`;
        }
        return 'last message';
    }

    getInitialPage(chat: Chat | undefined) {
        if (!chat) return undefined;
        if (chat.pending_messages === 0) return 1;
        return Math.ceil(chat.pending_messages / messageConstants.message_limit);
    }
}

export default new ChatService();
