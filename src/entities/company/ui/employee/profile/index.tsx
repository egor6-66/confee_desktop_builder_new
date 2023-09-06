import React from 'react';

import { useWidthMediaQuery } from 'shared/hooks';
import { BaseTypes } from 'shared/types';
import { Avatar, Box, Button, Card, Dropdown, DropdownTypes, Icons, IconsTypes, Title } from 'shared/ui';

import styles from './styles.module.scss';
import { UserCardView, userProxy } from '../../../../user';
import { UserProxy } from '../../../../user/model/types';
import { EmployeeProxy } from '../../../model/types';
import Status from '../status';

type Props = {
    employee: EmployeeProxy | BaseTypes.Empty;
    back: () => void;
} & BaseTypes.Statuses;

function EmployeeProfileView(props: Props) {
    const { employee, back } = props;

    const user: UserProxy | null = employee?.user ? userProxy(employee?.user) : null;

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <UserCardView
                    actions={{
                        videoCall: () => console.log('videoCall'),
                        audioCall: () => console.log('audioCall'),
                        getChat: () => console.log('getChat'),
                        mute: () => console.log('mute'),
                    }}
                    visibleHeader
                    type="employee"
                    visibleActionsMenu
                    name={employee?.full_name}
                    aboutMe=""
                    avatar={employee?.avatar}
                    email={employee?.email}
                    birth={user?.formatted_birth}
                    phone={user?.phone}
                    nickname={user?.nickname}
                />
            </div>
        </div>
    );
}

export default EmployeeProfileView;
