import UserList from '@/screens/admin/users/UserList';
import { NextPageAuth } from '@/shared/types/auth';
import React from 'react';

const UsersListPage: NextPageAuth = () => {
    return (
        <UserList />
    );
};

UsersListPage.isOnlyAdmin = true

export default UsersListPage;