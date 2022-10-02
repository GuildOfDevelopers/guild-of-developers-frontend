import React, { FC } from 'react';
import {
  AsideContent,
  Card,
  Department,
  Item,
  MainContent,
  MemberInfo,
  MemberProjects,
  MemberStack,
  MoreInfo,
  Name,
  NickName,
  Photo,
  ProjectsCount,
  Stack,
  TimeInGuild
} from './style';
import { PhotoPlaceholder, StarIcon } from './icon';

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
      <AsideContent>
        {member.img !== '' ? (
          <Photo>
            <img src={member.img} alt="Фотография участника" />
          </Photo>
        ) : (
          <Photo>
            <PhotoPlaceholder />
          </Photo>
        )}
      </AsideContent>
      <MainContent>
        <MemberInfo>
          <Name>
            {member.surname} {member.name} <StarIcon />
          </Name>
          <NickName>@{member.nickname}</NickName>
        </MemberInfo>
        <MemberStack>
          <h4>Должность</h4>
          <Department>
            {member.department.map((department) => (
              <Item>{department}</Item>
            ))}
          </Department>
          <h4>Стек</h4>
          <Stack>
            {member.stack.map((stack) => (
              <Item>{stack}</Item>
            ))}
          </Stack>
        </MemberStack>
        <MemberProjects>
          <ProjectsCount>
            Участие
            <br />
            в&nbsp;проектах
            <span>{member.projectsCount}</span>
          </ProjectsCount>
          <TimeInGuild>
            Состоит
            <br />
            в&nbsp;Гильдии
            <span>{member.timeInGuild}</span>
          </TimeInGuild>
          <MoreInfo wip="true">Подробнее</MoreInfo>
        </MemberProjects>
      </MainContent>
    </Card>
  );
};

export default Member;
