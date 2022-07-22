import Admin from '@/screens/admin/home/Admin';
import { NextPageAuth } from '@/shared/types/auth';
import React from 'react';

const AdminPage: NextPageAuth = () => {
    return (
        <Admin />
    );
};

AdminPage.isOnlyAdmin = true

export default AdminPage;