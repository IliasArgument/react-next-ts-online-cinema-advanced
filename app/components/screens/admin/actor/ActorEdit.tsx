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
import { IActorEditInput } from './actor-edit-interface';
import { useActorEdit } from './useActorEdit';
import formStyle from '../../../ui/form-elements/admin-form.module.scss'
import { stripHtml } from 'string-strip-html';
import dynamic from 'next/dynamic';
import UploadFile from '@/components/ui/form-elements/UploadField/UploadFile';

const DynamicTextEditor = dynamic(() => import('@/components/ui/form-elements/TextEditor'), {
    ssr: false
})

const ActorEdit: FC = () => {
    const { handleSubmit, register, formState: { errors }, setValue, getValues, control } = useForm<IActorEditInput>({
        mode: 'onChange'
    })

    const { isLoading, onSubmit } = useActorEdit(setValue)

    return (
        <Meta title='Edit actor'>
            <AdminNavigation />
            <Heading title='Edit actor' />
            <form onSubmit={handleSubmit(onSubmit)} className={formStyle.form}>
                {
                    isLoading ? <SkeletonLoader count={3} /> : (
                        <>
                            <div className={formStyle.fields}>
                                <Field
                                    {...register('name', {
                                        required: 'Name is required'
                                    })}
                                    placeholder='Name'
                                    error={errors.name}
                                />
                                <SlugField
                                    register={register}
                                    error={errors.slug}
                                    generate={() => setValue('slug', generateSlug(getValues('name')))}
                                />
                                <Controller
                                    control={control}
                                    name='photo'
                                    defaultValue=''
                                    render={({
                                        field: {
                                            value, onChange
                                        },
                                        fieldState: { error }
                                    }) => (
                                        <UploadFile onChange={onChange} value={value} error={error} folder='actors' placeholder='Photo' />
                                    )}
                                    rules={{
                                        required: 'Photo is required'
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

export default ActorEdit;