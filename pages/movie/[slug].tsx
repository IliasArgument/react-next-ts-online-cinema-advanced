import SingleMovie from '@/components/screens/single-movie/SingleMovie';
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface';
import { getMovieUrl } from '@/config/url.config';
import { GenreService } from '@/services/genre.service';
import { MovieService } from '@/services/movie.service';
import { IMovie } from '@/shared/types/movie.types';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types';
import Error404 from '../404'

export interface IMoviePage {
    movie: IMovie
    similarMovies: IGalleryItem[]
}

const MoviePage: NextPage<IMoviePage> = ({ similarMovies, movie }) => {
    return (
        movie ?
            <SingleMovie
                similarMovies={similarMovies || []}
                movie={movie}
            /> : <Error404 />
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
        const { data: movie } = await MovieService.getBySlug(String(params?.slug))

        const { data: dataSimilarMovies } = await MovieService.getByGenres(movie.genres.map((g: { _id: string; }) => g._id))

        const similarMovies: IGalleryItem[] = dataSimilarMovies.filter(m => m._id !== movie._id).map(m => ({
            name: m.title,
            posterPath: m.poster,
            link: getMovieUrl(m.slug),
        }))

        return {
            props: {
                movie,
                similarMovies
            },
            revalidate: 60,
        }
    } catch (e) {
        return {
            notFound: true
        }
    }
}

export default MoviePage;