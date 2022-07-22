import MovieList from '@/screens/admin/movies/MovieList';
import { NextPageAuth } from '@/shared/types/auth';
import React from 'react';

const MovieListPage: NextPageAuth = () => {
    return (
        <MovieList />
    );
};

MovieListPage.isOnlyAdmin = true

export default MovieListPage;