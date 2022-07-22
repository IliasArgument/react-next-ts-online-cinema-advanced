import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { RatingService } from '@/services/rating.service'

import { toastError } from '@/utils/toastError'

export const useRateMovie = (movieId: string) => {
	const [rating, setRating] = useState(0)
	const [isSended, setIsSended] = useState(false)

	const { refetch } = useQuery(
		['your movie rating', movieId],
		() => RatingService.getByUserMovie(movieId),
		{
			onSuccess: ({ data }) => {
				setRating(data)
			},
			onError: (error) => {
				toastError(error, 'Get rating')
			},
			enabled: !!movieId,
		}
	)

	const { mutateAsync } = useMutation(
		'set rating movie',
		({ value }: { value: number }) => RatingService.setRating(movieId, value),
		{
			onSuccess() {
				toastr.success('Rate movie', 'You have successfully rated')

				setIsSended(true)
				refetch()

				setTimeout(() => {
					setIsSended(false)
				}, 2400)
			},
			onError(error) {
				toastError(error, 'Update user')
			},
		}
	)

	const handleClick = async (nextValue: number) => {
		setRating(nextValue)
		await mutateAsync({ value: nextValue })
	}
	return {
		handleClick,
		rating,
		isSended,
	}
}
