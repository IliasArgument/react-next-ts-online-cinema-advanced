import MovieEdit from '@/screens/admin/movie/MovieEdit';
import { NextPageAuth } from '@/shared/types/auth';
import React from 'react';

const MovieEditPage: NextPageAuth = () => {
    return (
        <MovieEdit />
    );
};

MovieEditPage.isOnlyAdmin = true


export default MovieEditPage;