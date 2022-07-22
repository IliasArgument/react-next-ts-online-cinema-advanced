import UserEdit from '@/components/screens/admin/user/UserEdit';
import { NextPageAuth } from '@/shared/types/auth';
import React from 'react';

const UserEditPage: NextPageAuth = () => {
    return (
        <UserEdit />
    );
};

UserEditPage.isOnlyAdmin = true


export default UserEditPage;