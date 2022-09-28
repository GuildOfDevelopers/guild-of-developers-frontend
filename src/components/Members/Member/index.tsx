import React, { FC } from 'react';
import { Card } from './style';

interface MemberProps {
  member: {
    id: number;
    name: string;
    surname: string;
    nickname: string;
    department: string[];
    stack: string[];
    projectsCount: number;
    timeInGuild: string;
    img: string;
  };
}

const Member: FC<MemberProps> = ({ member }) => {
  return (
    <Card>
      <div>{member.name}</div>
      <div>{member.surname}</div>
      <div>{member.nickname}</div>
      <div>{member.department}</div>
      <div>{member.stack}</div>
      <div>{member.projectsCount}</div>
      <div>{member.timeInGuild}</div>
    </Card>
  );
};

export default Member;
