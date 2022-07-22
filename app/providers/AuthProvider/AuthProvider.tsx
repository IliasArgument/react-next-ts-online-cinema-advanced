import { FC, useEffect } from 'react';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { TypeComponentAuthFields } from '@/shared/types/auth';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

export interface IProps {
    children: React.ReactNode
}

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })


const AuthProvider: FC<TypeComponentAuthFields & IProps> = ({ children, Component: { isOnlyAdmin, inOnlyUser }, }) => {

    const { user } = useAuth()
    const { logout, checkAuth } = useActions()

    const { pathname } = useRouter()

    useEffect(() => {
        const accessToken = Cookies.get('accessToken')
        if (accessToken) checkAuth()
    }, [])

    useEffect(() => {
        const refreshToken = Cookies.get('refreshToken')
        if (!refreshToken && user) logout()
    }, [pathname])

    return !isOnlyAdmin && !inOnlyUser ? <>{children}</> : <DynamicCheckRole Component={{ isOnlyAdmin, inOnlyUser }}>{children}</DynamicCheckRole>
};

export default AuthProvider;