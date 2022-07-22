import { useAuth } from '@/hooks/useAuth';
import { TypeComponentAuthFields } from '@/shared/types/auth';
import { useRouter } from 'next/router';
import { FC } from 'react';

export interface IProps {
    children: React.ReactNode
}

const CheckRole: FC<TypeComponentAuthFields & IProps> = (
    { children, Component: { isOnlyAdmin, inOnlyUser } }
) => {

    const { user } = useAuth()

    const router = useRouter()

    const Children = () => <>{children}</>

    if (!isOnlyAdmin && !inOnlyUser) return <Children />

    if (user?.isAdmin) return <Children />

    if (isOnlyAdmin) {
        router.pathname !== '/404' && router.replace('/404')
        return null
    }

    const isUser = user && !user.isAdmin

    if (isUser && inOnlyUser) return <Children />
    else {
        router.pathname !== '/auth' && router.replace('/auth')
        return null
    }
}

export default CheckRole;