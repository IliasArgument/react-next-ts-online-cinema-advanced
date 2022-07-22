import Profile from '@/components/screens/profile/Profile';
import { NextPageAuth } from '@/shared/types/auth';
import React from 'react';

const ProfilePage: NextPageAuth = () => {
    return (<Profile />);
};

ProfilePage.inOnlyUser = true

export default ProfilePage;