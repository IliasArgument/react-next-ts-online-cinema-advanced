import { useAuth } from '@/hooks/useAuth';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthInput } from './auth.interface';
import { useAuthRedirect } from './useAuthRedirect';
import styles from './Auth.module.scss'
import Meta from '@/utils/meta/Meta';
import Heading from '@/components/ui/heading/Heading';
import Button from '@/components/ui/form-elements/Button';
import AuthFields from './AuthFields';
import { useActions } from '@/hooks/useActions';
import { useRouter } from 'next/router';

const Auth: FC = () => {
    useAuthRedirect()

    const { isLoading } = useAuth()
    const { user } = useAuth()


    const [type, setType] = useState<'login' | 'register'>('login')

    const { register: registerInput, handleSubmit, formState, reset } = useForm<IAuthInput>({
        mode: 'onChange'
    })

    const { login, register } = useActions()

    const onSubmit: SubmitHandler<IAuthInput> = (data) => {
        if (type === 'login') login(data)
        else if (type === 'register') register(data)
        reset()
    }

    return (
        <Meta title='Auth'>
            <section className={styles.wrapper}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Heading title='Auth' className='mb-6' />

                    <AuthFields
                        register={registerInput}
                        formState={formState}
                        isPasswordRequired
                    />
                    <div className={styles.buttons}>
                        <Button
                            disabled={isLoading}
                            type='submit'
                            onClick={() => setType('login')}
                        >
                            Login
                        </Button>
                        <Button
                            disabled={isLoading}
                            type='submit'
                            onClick={() => setType('register')}
                        >
                            Register
                        </Button>
                    </div>
                </form>
            </section>
        </Meta>
    );
};

export default Auth;