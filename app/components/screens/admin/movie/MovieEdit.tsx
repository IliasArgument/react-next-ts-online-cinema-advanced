import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation';
import Button from '@/components/ui/form-elements/Button';
import Field from '@/components/ui/form-elements/Field';
import SlugField from '@/components/ui/form-elements/slug-field/SlugField';
import Heading from '@/components/ui/heading/Heading';
import SkeletonLoader from '@/components/ui/SkeletonLoader';
import { generateSlug } from '@/utils/generateSlug';
import Meta from '@/utils/meta/Meta';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IMovieEditInput } from './movie-edit-interface';
import { useMovieEdit } from './useMovieEdit';
import formStyle from '../../../ui/form-elements/admin-form.module.scss'
import UploadFile from '@/ui/form-elements/UploadField/UploadFile';

const MovieEdit: FC = () => {
    const { handleSubmit, register, formState: { errors }, setValue, getValues, control } = useForm<IMovieEditInput>({
        mode: 'onChange'
    })

    const { isLoading, onSubmit } = useMovieEdit(setValue)

    return (
        <Meta title='Edit movie'>
            <AdminNavigation />
            <Heading title='Edit movie' />
            <form onSubmit={handleSubmit(onSubmit)} className={formStyle.form}>
                {
                    isLoading ? <SkeletonLoader count={3} /> : (
                        <>
                            <div className={formStyle.fields}>
                                <Field
                                    {...register('title', {
                                        required: 'Title is required'
                                    })}
                                    placeholder='title'
                                    error={errors.title}
                                />
                                <SlugField
                                    register={register}
                                    error={errors.slug}
                                    generate={() => setValue('slug', generateSlug(getValues('title')))}
                                />

                                <Field
                                    {...register('parameters.country', {
                                        required: 'Country is required'
                                    })}
                                    placeholder='USA, Colombia'
                                    error={errors.parameters?.country}
                                    style={{ width: '31%' }}
                                />
                                <Field
                                    {...register('parameters.duration', {
                                        required: 'Duration is required'
                                    })}
                                    placeholder='Duration (min.)'
                                    error={errors.parameters?.duration}
                                    style={{ width: '31%' }}
                                />
                                <Field
                                    {...register('parameters.year', {
                                        required: 'Year is required'
                                    })}
                                    placeholder='Year'
                                    error={errors.parameters?.year}
                                    style={{ width: '31%' }}
                                />


                                <Controller
                                    control={control}
                                    name='poster'
                                    defaultValue=''
                                    render={({
                                        field: {
                                            value, onChange
                                        },
                                        fieldState: { error }
                                    }) => (
                                        <UploadFile onChange={onChange} value={value} error={error} folder='movies' placeholder='Poster' />
                                    )}
                                    rules={{
                                        required: 'Poster is required'
                                    }}
                                />
                            </div>
                            <Button>Update</Button>
                        </>
                    )
                }
            </form>
        </Meta>
    );
};

export default MovieEdit;