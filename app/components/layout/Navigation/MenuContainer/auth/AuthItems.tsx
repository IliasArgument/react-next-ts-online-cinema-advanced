import { getAdminHomeUrl } from '@/config/url.config';
import { useAuth } from '@/hooks/useAuth';
import { FC, useState, useEffect } from 'react';
import MenuItem from '../MenuItem';
import LogoutButton from './LogoutButton';

const AuthItems: FC = () => {
    const { user } = useAuth()
    const [userAuth, setUserAuth] = useState(true)
    return (
        <>
            {
                user ? (
                    <>
                        <MenuItem
                            item={{
                                icon: "MdSettings",
                                link: '/profile',
                                title: 'Profile'
                            }}
                        />
                        <LogoutButton />
                    </>
                ) :
                    (
                        <MenuItem
                            item={{
                                icon: "MdLogin",
                                link: '/auth',
                                title: 'Login'
                            }}
                        />
                    )
            }
            {user?.isAdmin && <MenuItem
                item={{
                    icon: "MdOutlineLock",
                    link: getAdminHomeUrl(),
                    title: 'Admin Panel'
                }} />
            }
        </>
    );
};

export default AuthItems;
