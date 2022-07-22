import CatalogMovies from '@/components/ui/catalog-movies/CatalogMovies';
import { MovieService } from '@/services/movie.service';
import { IMovie } from '@/shared/types/movie.types';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';

const FreshPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
    return <CatalogMovies title={'Fresh Movies'} movies={movies || []} description='New movies and series ...' />
};

export const getStaticProps: GetStaticProps = async () => {
    try {
        const { data: movies } = await MovieService.getMovies()

        return {
            props: {
                movies
            },
            revalidate: 60,
        }
    } catch (e) {
        return {
            notFound: true
        }
    }
}

export default FreshPage;