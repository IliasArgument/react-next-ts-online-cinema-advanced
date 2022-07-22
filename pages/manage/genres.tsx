import GenreList from '@/screens/admin/genres/GenreList';
import { NextPageAuth } from '@/shared/types/auth';
import React from 'react';

const GenreListPage: NextPageAuth = () => {
    return (
        <GenreList />
    );
};

GenreListPage.isOnlyAdmin = true

export default GenreListPage;