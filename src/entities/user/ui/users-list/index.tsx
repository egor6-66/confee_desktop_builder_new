import React from 'react';

import { BaseTypes } from 'shared/types';
import { Button, Input, Pagination, PaginationTypes } from 'shared/ui';

import styles from './styles.module.scss';
import { User } from '../../model/types';
import UserCardView from '../card';
import UserStatusView from '../status';
import UsersFilterView from '../users-filter';

type Props = {
    users: User[] | BaseTypes.Empty;
    headerTitle: string;
    pageClick: PaginationTypes.PageClick;
    setSelectedUser: (arg: User) => void;
    selectedUsersId: number[];
    userCardClick: (arg: User) => void;
} & BaseTypes.Statuses;

function UsersListView(props: Props) {
    const { users, headerTitle, pageClick, setSelectedUser, selectedUsersId, userCardClick } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.name}>{headerTitle}</div>
                <div className={styles.filterAndSearch}>
                    <UsersFilterView />
                    <Input.Search placeholder="Поиск по сотрудникам отдела" />
                </div>
            </div>
            <div className={styles.columnsNames}>
                <div className={styles.content}>
                    <div className={styles.usersColumn}>Сотрудники отдела</div>
                    <div className={styles.roleColumn}>Должность</div>
                    <div className={styles.statusesColumn}>Статусы</div>
                    <div className={styles.btnColumn}>
                        <Button size="m">Выбрать</Button>
                    </div>
                </div>
            </div>
            <div className={styles.list}>
                {users &&
                    users.map((user) => (
                        <div key={user.id} className={styles.item}>
                            <div className={styles.content}>
                                <div className={styles.usersColumn}>
                                    <UserCardView user={user} size="m" onClick={() => userCardClick(user)} />
                                </div>
                                <div className={styles.roleColumn}>разраб</div>
                                <div className={styles.statusesColumn}>
                                    <UserStatusView status="not-available" />
                                </div>
                                <div className={styles.btnColumn}>
                                    <Button active={selectedUsersId.includes(user.id)} onClick={() => setSelectedUser(user)} size="m">
                                        {selectedUsersId.includes(user.id) ? 'Выбран' : 'Выбрать'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <div className={styles.pagination}>
                <Pagination pageCount={70} pageClick={pageClick} />
            </div>
        </div>
    );
}

export default UsersListView;
