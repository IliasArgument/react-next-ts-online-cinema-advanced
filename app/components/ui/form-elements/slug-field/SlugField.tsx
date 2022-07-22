import { FC } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import styles from './SlugField.module.scss';
import Field from '../Field';

interface ISlugField {
    error?: FieldError
    register: UseFormRegister<any>
    generate: () => void
}

const SlugField: FC<ISlugField> = ({
    error, register, generate
}) => {
    return (
        <div style={{ position: 'relative' }}>
            <Field
                {...register('slug', {
                    required: 'Slug is required'
                })}
                placeholder='Slug'
                error={error}
            />
            <div className={styles.badge} onClick={generate}>
                generate
            </div>
        </div>
    );
};

export default SlugField;