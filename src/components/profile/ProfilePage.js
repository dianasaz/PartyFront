import React from 'react';
import Profile from './Profile';
import Left from '../LeftColumn'

function ProfilePage() {
  return (
    <div className="row">
      <Left />
      <Profile />
    </div>
  );
}

export default ProfilePage;
