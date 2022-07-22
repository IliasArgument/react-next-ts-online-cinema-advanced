import Materialcon from '@/components/ui/MateriaIcon';
import { getActorUrl, getGenreUrl } from '@/config/url.config';
import { IMovie } from '@/shared/types/movie.types';
import { FC } from 'react';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import styles from './Content.module.scss'
import ContentList from './ContentList/ContentList';

const Content: FC<{ movie: IMovie }> = ({ movie }) => {
    return (
        <div className={styles.content}>
            <h1>{movie.title}</h1>
            <div className={styles.details}>
                <span>{movie.parameters.year} . </span>
                <span>{movie.parameters.country} . </span>
                <span>{movie.parameters.duration} min.</span>
            </div>
            <ContentList links={movie.genres.slice(0, 3).map(g => ({
                _id: g._id,
                link: getGenreUrl(g.slug),
                title: g.name
            }))} name={'Genres'} />
            <ContentList links={movie.genres.slice(0, 3).map(a => ({
                _id: a._id,
                link: getActorUrl(a.slug),
                title: a.name
            }))} name={'Actors'} />

            <div className={styles.rating}>
                <Materialcon name='MdStarRate' />
                <span>{movie.rating.toFixed(1)}</span>
            </div>

            <FavoriteButton movieId={movie._id} />
        </div>
    );
};

export default Content;