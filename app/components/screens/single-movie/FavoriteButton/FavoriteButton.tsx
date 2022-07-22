import { UserService } from '@/services/user.service';
import { toastError } from '@/utils/toastError';
import { FC, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useFavorites } from '../../favorites/useFavorites';
import HeardImage from '../heard-image.png'
import cn from 'classnames'
import styles from './FavoriteButton.module.scss'

const FavoriteButton: FC<{ movieId: string }> = ({ movieId }) => {
    const [isSmashed, setIsSmashed] = useState(false)

    const { favoriteMovies, refetch } = useFavorites()

    useEffect(() => {
        if (!favoriteMovies) return

        const isHasMovie = favoriteMovies.some(f => f._id === movieId)

        if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie)
    }, [favoriteMovies, isSmashed, movieId])

    const { mutateAsync } = useMutation(
        'update favorites',
        () => UserService.toggleFavorite(movieId),
        {
            onSuccess() {
                setIsSmashed(!isSmashed)
                refetch()
            },
            onError(error) {
                toastError(error, 'Update favorite list')
            },
        }
    )
    return (
        <button
            className={cn(styles.button, {
                [styles.animate]: isSmashed,
            })}
            onClick={() => mutateAsync()}
            style={{ backgroundImage: `url(${HeardImage})` }}
        />
    );
};

export default FavoriteButton;