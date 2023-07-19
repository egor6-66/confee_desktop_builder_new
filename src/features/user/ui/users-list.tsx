import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

import { UsersListView, UserApi, useUserStore, UserTypes } from 'entities/user';

function UsersList() {
    const params = useParams();
    const navigate = useNavigate();
    const { data, isLoading, isError } = UserApi.handleGetUsers();
    const setSelectedUser = useUserStore.use.setSelectedUsers();
    const selectedUser = useUserStore.use.selectedUsers();

    const pageClick = (page: number) => {};

    const clickOnUserCard = (user: UserTypes.User) => {
        navigate(`${params.division_name ? '' : 'division/unknown/'}user/${user.id}/name/${user.first_name}/info/images`);
    };

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUser: any = data?.data?.data.filter((i, index) => {
            if (i.first_name) return i;
        });
        setUsers(getUser);
    }, [data]);

    return (
        <UsersListView
            users={users}
            headerTitle={params.division_name || params.department_name || 'Все сотрудники'}
            userCardClick={clickOnUserCard}
            pageClick={pageClick}
            setSelectedUser={setSelectedUser}
            selectedUsersId={selectedUser.map((user) => user.id)}
        />
    );
}

export default UsersList;
