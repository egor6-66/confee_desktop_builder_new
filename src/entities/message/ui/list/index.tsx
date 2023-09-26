import React, { useRef, Fragment, useEffect, useState } from 'react';
import { mergeRefs } from 'react-merge-refs';
import { useUpdateEffect } from 'react-use';

import { useInView, usePrevious, useScroll, UseStoreTypes, useDimensionsObserver } from 'shared/hooks';
import { BaseTypes } from 'shared/types';

import styles from './styles.module.scss';
import { Box, Button, Counter, Icons } from '../../../../shared/ui';
import { appTypes } from '../../../app';
import { chatTypes } from '../../../chat';
import { UserProxy } from '../../../user/model/types';
import { MessageMenuActions, MessageProxy } from '../../model/types';
import Message from '../message';
import SystemMessage from '../message/variants/system';

type Props = {
    chat: chatTypes.Chat | BaseTypes.Empty;
    messages: MessageProxy[];
    getPrevPage: () => void;
    getNextPage: () => void;
    readMessage: (messageId: number) => void;
    subscribeToChat: (action: 'sub' | 'unsub') => void;
    chatSubscription: number | null;
    messageMenuAction: (action: MessageMenuActions, message: MessageProxy) => void;
    sendReaction: (emoji: string, messageId: number) => void;
    openUserModal: (user: UserProxy | null) => void;
    highlightedMessages: UseStoreTypes.SelectorWithArr<MessageProxy>;
    voiceRecordingInProgress: boolean;
} & BaseTypes.Statuses;

function MessagesListView(props: Props) {
    const {
        chat,
        messages,
        getPrevPage,
        getNextPage,
        readMessage,
        subscribeToChat,
        chatSubscription,
        messageMenuAction,
        sendReaction,
        openUserModal,
        highlightedMessages,
        voiceRecordingInProgress,
        loading,
    } = props;

    const [initOnce, setInitOnce] = useState(true);

    const prevChat = usePrevious(chat);

    const { executeScrollToElement, scrollBottom } = useScroll();

    const wrapperRef: any = useRef<HTMLDivElement>(null);
    const lastMessageRef = useRef<HTMLDivElement>(null);
    const firstUnreadMessageRef = useRef<HTMLDivElement>(null);

    const { ref: prevPageRef, inView: inViewPrevPage } = useInView({ delay: 200 });
    const { ref: nextPageRef, inView: inViewNextPage } = useInView({ delay: 200 });
    const { ref: lastMessageCheckVisibleRef, inView: inViewLastMessageCheckVisibleRef } = useInView({ delay: 200 });
    const { ref: firstUnreadCheckVisibleRef, inView: inViewFirstUnreadCheckVisibleRef } = useInView({ delay: 200 });

    const getMessageRefs = (message: MessageProxy, index: number) => {
        if (!messages?.length) return null;
        const refs = [];
        if (message.isFirstUnread) {
            refs.push(firstUnreadMessageRef);
            refs.push(firstUnreadCheckVisibleRef);
        }
        if (messages.length - 1 === index) refs.push(lastMessageRef);
        if (messages.length - 1 === index) refs.push(lastMessageCheckVisibleRef);
        return mergeRefs(refs);
    };

    const rowClick = (message: MessageProxy) => {
        if (highlightedMessages.value.length) {
            highlightedMessages.pushOrDelete(message);
        }
    };

    const clickBtnDown = () => {
        if (!chat?.pending_messages_count) {
            executeScrollToElement({ ref: lastMessageRef, enable: true });
        } else {
            executeScrollToElement({ ref: firstUnreadMessageRef, enable: true });
        }
    };

    useEffect(() => {
        if (wrapperRef?.current && chat) {
            scrollBottom({
                ref: wrapperRef,
                enable: (initOnce && !chat?.pending_messages_count) || inViewLastMessageCheckVisibleRef,
                smooth: inViewLastMessageCheckVisibleRef,
            });
            executeScrollToElement({ ref: firstUnreadMessageRef, enable: !!chat?.pending_messages_count && initOnce });
            if (prevChat?.id !== chat.id) setInitOnce(true);
            setTimeout(() => setInitOnce(false), 1000);
        }
    }, [messages, chatSubscription]);

    useEffect(() => {
        if (inViewPrevPage) getPrevPage();
        if (inViewNextPage) getNextPage();
    }, [inViewPrevPage, inViewNextPage]);

    useEffect(() => {
        subscribeToChat(inViewLastMessageCheckVisibleRef ? 'sub' : 'unsub');
    }, [inViewLastMessageCheckVisibleRef, chat?.pending_messages_count]);

    useEffect(() => {
        const firstUnread = messages.find((i) => i.isFirstUnread);
        inViewFirstUnreadCheckVisibleRef && firstUnread && readMessage(firstUnread.id);
    }, [inViewFirstUnreadCheckVisibleRef]);

    return (
        <div className={styles.wrapper} ref={wrapperRef}>
            <Box.Animated visible={!inViewFirstUnreadCheckVisibleRef && !inViewLastMessageCheckVisibleRef && !initOnce} className={styles.btnDown}>
                <Counter>{chat?.pending_messages_count}</Counter>
                <Button.Circle radius={34} onClick={clickBtnDown}>
                    <Icons variant="arrow-drop-down" />
                </Button.Circle>
            </Box.Animated>
            {messages?.map((message, index) => (
                <Fragment key={message.id}>
                    {message.systemMessages.length
                        ? message.systemMessages.map((text) => (
                              <div key={index} ref={getMessageRefs(message, index)} onMouseEnter={() => !message.is_read && readMessage(message.id)}>
                                  <SystemMessage text={text} />
                              </div>
                          ))
                        : null}
                    {message.type !== 'system' && (
                        <div
                            onClick={() => rowClick(message)}
                            onMouseEnter={() => !message.is_read && readMessage(message.id)}
                            className={`${styles.row} ${highlightedMessages.value.find((i) => i.id === message.id) ? styles.row_active : ''}`}
                            style={{
                                justifyContent: message.isMy ? 'flex-end' : 'flex-start',
                                cursor: highlightedMessages.value.length ? 'pointer' : 'default',
                            }}
                            ref={getMessageRefs(message, index)}
                        >
                            {index === 5 && <div ref={nextPageRef} />}
                            <Message
                                openUserModal={openUserModal}
                                sendReaction={sendReaction}
                                chat={chat}
                                ref={wrapperRef}
                                message={message}
                                messageMenuAction={messageMenuAction}
                                voiceRecordingInProgress={voiceRecordingInProgress}
                            />
                            {messages?.length - 5 === index && <div ref={prevPageRef} />}
                        </div>
                    )}
                </Fragment>
            ))}
        </div>
    );
}

export default MessagesListView;
