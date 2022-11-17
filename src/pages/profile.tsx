import React, { FC } from 'react';
import MemberProfile from '../components/MemberProfile';

const Profile: FC = () => {
  return <MemberProfile owner={true} />; // owner если владелец то должно быть true
};

export default Profile;
