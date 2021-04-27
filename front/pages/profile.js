import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import UserProfile from '../components/UserProfile'

const Profile = () => {
  return (
    <>
    <Head>
      <title>내 프로필 | NodeBird</title>
    </Head>
    <AppLayout>
        <div>My Profile</div>
    </AppLayout>
    </>
  );
}

export default Profile;