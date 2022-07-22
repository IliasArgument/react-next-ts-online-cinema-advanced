import Catalog from '@/components/ui/catalog-movies/Catalog';
import { GenreService } from '@/services/genre.service';
import { MovieService } from '@/services/movie.service';
import { IGenre, IMovie } from '@/shared/types/movie.types';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types';
import Error404 from '../404';

interface IGenrePage {
    movies: IMovie[]
    genre: IGenre
}

const GenrePage: NextPage<IGenrePage> = ({ genre, movies }) => {
    return (
        genre ? (<Catalog
            title={genre.name}
            movies={movies || []}
            description={genre.description}
        />) : (
            <Error404 />
        )
    )
};

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const { data: genres } = await GenreService.getAll()
        const paths = genres.map((g) => ({
            params: { slug: g.slug }
        }))

        return {
            paths, fallback: 'blocking'
        }

    } catch (e) {
        return {
            paths: [],
            fallback: false
        }
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const { data: genre } = await GenreService.getBySlug(String(params?.slug))

        const { data: movies } = await MovieService.getByGenres([genre._id])


        return {
            props: {
                genre,
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

export default GenrePage;