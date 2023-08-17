import React from 'react';

import { useWidthMediaQuery, UseStore } from 'shared/hooks';
import { BaseTypes } from 'shared/types';
import { Icons, Card, Button, TabBarTypes, TabBar, Box } from 'shared/ui';

import styles from './styles.module.scss';
import { MessageProxy } from '../../../message/model/types';
import { ChatProxy } from '../../model/types';

type Props = {
    chat: ChatProxy | BaseTypes.Empty;
    back: () => void;
    tabs: TabBarTypes.TabBarItem[];
    clickCard: () => void;
    highlightedMessages: UseStore.SelectorWithOArr<MessageProxy>;
} & BaseTypes.Statuses;

function ChatHeaderView(props: Props) {
    const { chat, back, tabs, clickCard, highlightedMessages } = props;

    function Main() {
        return (
            <div className={styles.main}>
                {useWidthMediaQuery().to('sm') && (
                    <Button.Circle onClick={back} variant="secondary">
                        <Icons variant="arrow-left" />
                    </Button.Circle>
                )}
                <div className={styles.left}>
                    <Card
                        onClick={clickCard}
                        avatarStatus={chat?.secondMemberStatus || null}
                        img={chat?.avatar}
                        name={chat?.name}
                        title={chat?.name}
                        subtitle={chat?.subtitle}
                    />
                </div>
                <div>
                    <TabBar variant="icons" items={tabs} activeItemId={0} />
                </div>
            </div>
        );
    }
    function HighlightedMessages() {
        return <div>highlightedMessages</div>;
    }

    return (
        <Box.Replace
            animationVariant="hiddenBottom"
            className={styles.wrapper}
            items={[
                { item: <HighlightedMessages />, visible: !!highlightedMessages.value.length },
                { item: <Main />, visible: !highlightedMessages.value.length },
            ]}
        />
    );
}

export default ChatHeaderView;
