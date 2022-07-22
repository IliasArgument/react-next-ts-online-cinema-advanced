import ActorList from '@/screens/admin/actors/ActorList';
import { NextPageAuth } from '@/shared/types/auth';
import React from 'react';

const ActorListPage: NextPageAuth = () => {
    return (
        <ActorList />
    );
};

ActorListPage.isOnlyAdmin = true

export default ActorListPage;