import moment from 'moment';
import React, { useEffect } from 'react';

import { useArray, useEasyState } from 'shared/hooks';
import { getEnding } from 'shared/lib';
import { BaseTypes } from 'shared/types';
import { Box, IconsTypes, Icons, Title, Emoji, Card } from 'shared/ui';

import styles from './styles.module.scss';
import { createMemo } from '../../../../../shared/hooks';
import { chatTypes } from '../../../../chat';
import { EmployeeProxy } from '../../../../company/model/types';
import { userProxy } from '../../../../user';
import { UserProxy, User } from '../../../../user/model/types';
import { MessageMenuActions, MessageProxy } from '../../../model/types';

type Props = {
    chat: chatTypes.Chat | BaseTypes.Empty;
    message: MessageProxy;
    messageMenuAction: (action: MessageMenuActions, message: MessageProxy) => void;
    sendReaction: (emoji: string, messageId: number) => void;
    openChatProfileModal: (data: { user: UserProxy; employee: EmployeeProxy }) => void;
} & BaseTypes.Statuses;

const memoReadUsers = createMemo((users: User[] | BaseTypes.Empty, users_ids: number[]) => {
    const arr: UserProxy[] = [];
    users?.forEach((user) => {
        if (users_ids.includes(user.id)) {
            arr.push(userProxy(user) as any);
        }
    });
    return arr;
});

function MessageMenu(props: Props) {
    const { messageMenuAction, message, sendReaction, chat, openChatProfileModal } = props;

    const items: BaseTypes.Item<IconsTypes.BaseIconsVariants, MessageMenuActions | 'read'>[] = [
        { id: 0, title: 'Ответить', icon: 'reply', payload: 'reply' },
        { id: 1, title: 'Изменить', icon: 'edit', payload: 'edit' },
        // { id: 2, title: 'Закрепить', icon: 'pin', payload: 'fixed' },
        { id: 3, title: 'Копировать текст', icon: 'copy', payload: 'copy' },
        { id: 4, title: 'Переслать', icon: 'redirect', payload: 'forward' },
        { id: 5, title: 'Удалить', icon: 'delete', payload: 'delete' },
        { id: 6, title: 'Выделить', icon: 'check-circle', payload: 'highlight' },
        // { id: 7, title: 'Воспроизвести', icon: 'melody', payload: 'play' },
        {
            id: 8,
            title: `${message.users_have_read.length} ${getEnding(message.users_have_read.length, ['просмотр', 'просмотра', 'просмотров'])}`,
            icon: 'double-check',
            payload: 'read',
        },
    ];
    const reactions = ['1f4a3', '1f440', '26d4', '1f49c', '1f4a5', '1f34c', '1f44c', '1f44d'];

    const visibleAllReactions = useEasyState(false);
    const visibleUsers = useEasyState(false);

    const { array, deleteByIds, deleteById } = useArray({
        initialArr: items,
    });

    const readUsers = memoReadUsers(chat?.members, message.users_have_read);

    useEffect(() => {
        if (message.type !== 'text') deleteById(7);
        if (!message.users_have_read?.length) deleteById(8);
        if (!message.isMy) deleteByIds([1, 5]);
        if (!message.isMy || moment().unix() - moment(message.created_at).unix() > 86400) deleteById(1);
        if (message.type !== 'text') deleteById(3);
    }, []);

    const reactionClick = (emoji: string) => {
        sendReaction(emoji, message.id);
    };

    return (
        <div className={styles.wrapper}>
            {/* <div className={styles.reactions}> */}
            {/*    <div className={styles.baseList}> */}
            {/*        <div className={styles.list}> */}
            {/*            {reactions.map((i) => ( */}
            {/*                <Emoji.Item key={i} unified={i} clickOnEmoji={reactionClick} /> */}
            {/*            ))} */}
            {/*        </div> */}
            {/*        <div */}
            {/*            className={styles.btn} */}
            {/*            onClick={(e) => { */}
            {/*                e.stopPropagation(); */}
            {/*                visibleAllReactions.toggle(); */}
            {/*            }} */}
            {/*        > */}
            {/*            <Icons.ArrowAnimated variant="rotate" activeAnimate={visibleAllReactions.value} initialDeg={0} animateDeg={90} /> */}
            {/*        </div> */}
            {/*    </div> */}
            {/*    <Box.Animated visible={visibleAllReactions.value} animationVariant="autoHeight"> */}
            {/*        <div className={styles.allList}> */}
            {/*            {reactions.map((i) => ( */}
            {/*                <Emoji.Item key={i} unified={i} clickOnEmoji={reactionClick} /> */}
            {/*            ))} */}
            {/*        </div> */}
            {/*    </Box.Animated> */}
            {/* </div> */}
            <div className={styles.items}>
                <Box.Animated visible={visibleUsers.value} animationVariant="autoHeight" className={styles.users} onMouseLeave={() => visibleUsers.set(false)}>
                    <Card.List
                        items={readUsers.map((i) => ({
                            // onClick: () => openChatProfileModal(),
                            id: i.id,
                            img: i.avatar,
                            name: i.full_name,
                            title: i.contact_name || i.first_name,
                            subtitle: '',
                        }))}
                    />
                </Box.Animated>

                {array.map((i) => (
                    <div
                        key={i.id}
                        className={styles.item}
                        onClick={() => i.payload !== 'read' && messageMenuAction(i.payload, message)}
                        onMouseEnter={() => i.payload === 'read' && visibleUsers.set(true)}
                    >
                        <Icons variant={i.icon} />
                        <Title variant="H3M">{i.title}</Title>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MessageMenu;
// <Card.List
//     items={readUsers.map((i) => ({
//         onClick: () => openUserModal(i),
//         id: i.id,
//         img: i.avatar,
//         name: i.full_name,
//         title: i.full_name,
//         subtitle: '',
//     }))}
// />
