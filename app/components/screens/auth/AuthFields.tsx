import Field from '@/components/ui/form-elements/Field';
import { validEmail } from '@/shared/regex';
import { FC, useState } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';

interface IAuthFields {
    register: UseFormRegister<any>
    formState: FormState<any>
    isPasswordRequired?: boolean
    isProfile?: boolean
}

const AuthFields: FC<IAuthFields> = ({
    register, formState: { errors }, isPasswordRequired = false
}) => {
    const [isShow, setIsShow] = useState(false)
    const onToggle = (prev: any) => {
        setIsShow(prev)
    }
    return (
        <>
            <Field {...register('email', {
                required: 'Email is required',
                pattern: {
                    value: validEmail,
                    message: 'Please enter a valid email address'
                }
            })}
                placeholder='E-mail'
                error={errors.email}
            />

            <Field {...register('password', isPasswordRequired ? {
                required: 'Password is required',
                maxLength: {
                    value: 6,
                    message: 'Min length should more 6 symbols'
                }
            } : {})}
                placeholder='Password'
                error={errors.password}
                type={isShow ? 'text' : 'password'}
                isShow={isShow}
                toggle={() => onToggle(!isShow)}
                isProfile
                pass
            />
        </>
    );
};

export default AuthFields;