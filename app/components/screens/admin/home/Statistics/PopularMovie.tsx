import { MovieService } from '@/services/movie.service';
import { IMovie } from '@/shared/types/movie.types';
import { FC } from 'react';
import { useQuery } from 'react-query';
import cn from 'classnames'
import SubHeading from '@/components/ui/heading/SubHeading';
import SkeletonLoader from '@/components/ui/SkeletonLoader';
import Link from 'next/link';
import { getMovieUrl } from '@/config/url.config';
import Image from 'next/image';
import styles from '../Admin.module.scss';


const PopularMovie: FC = () => {
    const { isLoading, data: movie } = useQuery('Most Popular movie in admin', () =>
        MovieService.getMostPopularMovies(), {
        select: (data): IMovie => data[0]
    })

    return (
        <div className={cn(styles.block, styles.popular)}>
            <SubHeading title='The must popular movie' />
            {
                isLoading ? <SkeletonLoader /> : movie && (
                    <>
                        <h3>Opened {movie.countOpened} times</h3>
                        <Link href={getMovieUrl(movie.slug)}>
                            <a>
                                <Image
                                    width={285}
                                    height={176}
                                    src={movie.bigPoster}
                                    alt={movie.title}
                                    className={styles.image}
                                    unoptimized
                                />
                            </a>
                        </Link>
                    </>
                )
            }
        </div>
    );
};

export default PopularMovie;