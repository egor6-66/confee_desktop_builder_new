import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { useStore, UseStoreTypes } from 'shared/hooks';

import { MessageProxy } from './types';

type Store = {
    replyMessage: UseStoreTypes.SelectorWithObj<MessageProxy>;
    editMessage: UseStoreTypes.SelectorWithObj<MessageProxy>;
    forwardMessages: UseStoreTypes.SelectorWithObj<{ fromChatName: string; toChatId: number | null; messages: MessageProxy[]; redirect: boolean }>;
    highlightedMessages: UseStoreTypes.SelectorWithArr<MessageProxy>;
    voiceRecordingInProgress: UseStoreTypes.SelectorWithPrimitive<boolean>;
    visibleSearchMessages: UseStoreTypes.SelectorWithPrimitive<boolean>;
};

const { createSelectors, generateSelectorWithObj, generateSelectorWithArr, generateSelectorWithPrimitive } = useStore<Store>();

const messageStore = create<Store>()(
    devtools(
        immer((set) => ({
            ...generateSelectorWithPrimitive(['voiceRecordingInProgress', 'visibleSearchMessages'], set),
            ...generateSelectorWithObj(['replyMessage', 'editMessage', 'forwardMessages'], set),
            ...generateSelectorWithArr(['highlightedMessages'], set),
        }))
    )
);

const useMessageStore = createSelectors(messageStore);

export default useMessageStore;
