import React from 'react';

import { BaseTypes } from 'shared/types';
import { Box, Title, Counter, Icons, Avatar, Button, Input, TabBar, TabBarTypes } from 'shared/ui';

import styles from './styles.module.scss';
import { UseArrayReturnType, useHeightMediaQuery } from '../../../../shared/hooks';
import { ChatProxy } from '../../model/types';

type Props = {
    chats: ChatProxy[] | BaseTypes.Empty;
    clickOnChat: (arg: ChatProxy) => void;
    activeChatId: number | null;
    tabs: UseArrayReturnType<TabBarTypes.TabBarItem>;
} & BaseTypes.Statuses;

function ChatsListView(props: Props) {
    const { chats, clickOnChat, loading, activeChatId, tabs } = props;
    const miniSearch = useHeightMediaQuery().to('sm');

    return (
        <Box.Animated visible loading={loading} className={styles.wrapper}>
            {!miniSearch && (
                <div className={styles.search}>
                    <Input prefixIcon="search" />
                </div>
            )}
            <div className={styles.tabs}>
                <TabBar items={tabs.array} activeItemId={0} />
            </div>
            <div className={styles.list}>
                {chats?.length &&
                    chats?.map((chat, index: number) => (
                        <div
                            key={chat?.id}
                            className={`${styles.item} ${activeChatId === chat?.id ? styles.item_active : ''}`}
                            onClick={() => clickOnChat(chat)}
                        >
                            <div className={styles.body}>
                                <div className={styles.avatar}>
                                    <Avatar status={chat?.secondMemberStatus} size={52} img={chat.avatar} name={chat?.name} />
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.row}>
                                        <div className={styles.left}>
                                            <Title variant="H3S">{chat?.name}</Title>
                                            <Button tag>TFN</Button>
                                        </div>
                                        <div className={styles.right}>
                                            <Title textAlign="right" variant="caption1M" primary={false}>
                                                {chat?.date}
                                            </Title>
                                        </div>
                                    </div>
                                    <div className={styles.row}>
                                        <div className={styles.left}>
                                            <Title primary={false} variant="H3R">
                                                {chat?.lastMessageTitle}
                                            </Title>
                                        </div>
                                        <div className={styles.right}>
                                            {chat.pending_messages_count ? (
                                                <Counter variant="primary" height={18}>
                                                    {chat?.pending_messages_count}
                                                </Counter>
                                            ) : (
                                                chat?.checkIsMyLastMessage && (
                                                    <Icons variant={chat?.last_message.users_have_read.length ? 'double-check' : 'check'} />
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </Box.Animated>
    );
}

export default ChatsListView;
