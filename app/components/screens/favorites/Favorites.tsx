import Heading from '@/components/ui/heading/Heading';
import Meta from '@/utils/meta/Meta';
import { FC } from 'react';
import { useFavorites } from './useFavorites';
import styles from './Favorite.module.scss'
import SkeletonLoader from '@/components/ui/SkeletonLoader';
import FavoriteItem from './FavoriteItem';


const Favorites: FC = () => {

    const { isLoading, favoriteMovies } = useFavorites()
    return (
        <Meta title='favorites'>
            <Heading title='Favorites' />
            <section className={styles.favorites}>
                {
                    isLoading ? (
                        <SkeletonLoader
                            count={3}
                            className={styles.skeletonLoader}
                            containerClassName={styles.containerLoader}
                        />
                    ) : (
                        favoriteMovies?.map((movie) => (
                            <FavoriteItem
                                key={movie._id}
                                movie={movie}
                            />
                        ))
                    )
                }
            </section>
        </Meta>
    );
};

export default Favorites;