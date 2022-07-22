import { getMovieUrl } from '@/config/url.config';
import Meta from '@/utils/meta/Meta';
import { FC } from 'react';
import GalleryItem from '../gallery/GalleryItem';
import Description from '../heading/Description';
import Heading from '../heading/Heading';
import { ICatalog } from './catalog.interface';
import styles from './CatalogMovies.module.scss'

const CatalogMovies: FC<ICatalog> = ({ movies, title, description }) => {
    return (
        <Meta title={title} description={description}>
            <Heading title={title} className={styles.heading} />
            {description && <Description text={description} className={styles.description} />}

            <section className={styles.section}>
                {movies && movies.map(movie => <GalleryItem key={movie._id} item={{
                    name: movie.title,
                    link: getMovieUrl(movie.slug),
                    posterPath: movie.bigPoster,
                    content: {
                        title: movie.title
                    }
                }} variant='horizontal' />)}
            </section>
        </Meta>
    );
};

export default CatalogMovies;