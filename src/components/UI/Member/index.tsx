import React, { FC } from 'react';
import {
  Card,
  AsideContent,
  Photo,
  MainContent,
  MemberInfo,
  Name,
  NickName,
  MemberStack,
  List,
  Item,
  MemberProjects,
  ProjectsCount,
  TimeInGuild,
  MoreInfo
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
interface ImageProps {
  img: string;
}
interface InfoProps {
  name: string;
  surname: string;
  nickname: string;
}
interface StackProps {
  department: string[];
  stack: string[];
}
interface ProjectsProps {
  projectsCount: number;
  timeInGuild: string;
}

const Image: FC<ImageProps> = ({ img }) => {
  return (
    <>
      {img !== '' ? (
        <Photo>
          <img src={img} alt="Фотография участника" />
        </Photo>
      ) : (
        <Photo>
          <PhotoPlaceholder />
        </Photo>
      )}
    </>
  );
};

const Info: FC<InfoProps> = ({ name, surname, nickname }) => {
  return (
    <MemberInfo>
      <Name>
        {surname} {name} <StarIcon />
      </Name>
      <NickName>@{nickname}</NickName>
    </MemberInfo>
  );
};

const Stack: FC<StackProps> = ({ department, stack }) => {
  return (
    <MemberStack>
      <h4>Должность</h4>
      <List>
        {department.map((item) => (
          <Item key={item}>{item}</Item>
        ))}
      </List>
      <h4>Стек</h4>
      <List>
        {stack.map((item) => (
          <Item key={item}>{item}</Item>
        ))}
      </List>
    </MemberStack>
  );
};

const Projects: FC<ProjectsProps> = ({ projectsCount, timeInGuild }) => {
  return (
    <MemberProjects>
      <ProjectsCount>
        Участие <br /> в&nbsp;проектах
        <span>{projectsCount}</span>
      </ProjectsCount>
      <TimeInGuild>
        Состоит <br /> в&nbsp;Гильдии
        <span>{timeInGuild}</span>
      </TimeInGuild>
      <MoreInfo wip="true">Подробнее</MoreInfo>
    </MemberProjects>
  );
};

const Member: FC<MemberProps> = ({ member }) => {
  return (
    <Card>
      <AsideContent>
        <Image img={member.img} />
      </AsideContent>
      <MainContent>
        <Info name={member.name} surname={member.surname} nickname={member.nickname} />
        <Stack department={member.department} stack={member.stack} />
        <Projects projectsCount={member.projectsCount} timeInGuild={member.timeInGuild} />
      </MainContent>
    </Card>
  );
};

export default Member;
