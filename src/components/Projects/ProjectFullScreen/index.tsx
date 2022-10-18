import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../../lib/styled/container';
import { Arrow, Back, Forward } from './icon';
import {
  Section,
  Wrapper,
  GoBack,
  Title,
  SubTitle,
  Content,
  MainContent,
  MainBlock,
  Description,
  List,
  ListItem,
  AsideContent,
  AsideBlock,
  Button,
  Pagination,
  PaginationControl,
  PaginationLeft,
  PaginationRight
} from './style';
import { ProjectProps } from '../Project';
import { useGetProjectsQuery } from '../../../store/dataSlice';

const ProjectFullScreen: FC = () => {
  const { data } = useGetProjectsQuery('');
  const { projectId } = useParams<{ projectId?: string }>();
  const [project, setProject] = useState<ProjectProps['project']>();

  useEffect(() => {
    const card = data?.find((item) => item.id === Number(projectId));
    setProject(card);
  }, [projectId, data]);

  return (
    <Section>
      <Container>
        <Wrapper>
          <GoBack to="/currentProjects">
            <Arrow /> Все проекты
          </GoBack>
          <Title>Подробное описание проекта</Title>
          <Content>
            <MainContent>
              <MainBlock>
                <SubTitle>«{project?.title}»</SubTitle>
                <Description>{project?.description}</Description>
              </MainBlock>
              <MainBlock>
                <SubTitle>Чем предстоит заниматься:</SubTitle>
                <List>
                  {project?.todo.map((item, idx) => (
                    <ListItem key={idx}>{item}</ListItem>
                  ))}
                </List>
              </MainBlock>
              <MainBlock>
                <SubTitle>Тебе к нам в проект, если ты:</SubTitle>
                <List>
                  {project?.departments.map((item, idx) => (
                    <ListItem key={idx}>{item.name}</ListItem>
                  ))}
                </List>
              </MainBlock>
              <MainBlock>
                <SubTitle>Что ты получишь:</SubTitle>
                <List>
                  {project?.WhatYouGet.map((item, idx) => (
                    <ListItem key={idx}>{item}</ListItem>
                  ))}
                </List>
              </MainBlock>
            </MainContent>
            <AsideContent>
              <AsideBlock>
                <SubTitle>
                  Прочитать требования для каждого из направлений и откликнуться на проект
                </SubTitle>
                {/* TODO: ниже веременный костыль т.к. не у всех карточек есть ссылки на форму регистрации */}
                {project?.registrationFormUrl !== '' ? (
                  <Button href={project?.registrationFormUrl} target="_blank">
                    Записаться
                  </Button>
                ) : (
                  <Button href="#">Записаться</Button>
                )}
              </AsideBlock>
              {/* TODO: Решить какую логику сделать дляи пагинации. Предлагаю пока так */}
              <Pagination>
                {Number(projectId) > 0 && (
                  <PaginationControl to={`/projects/${Number(projectId) - 1}`}>
                    <Back /> <PaginationLeft>К предыдущему проекту</PaginationLeft>
                  </PaginationControl>
                )}
                {data && Number(projectId) < data.length - 1 && (
                  <PaginationControl to={`/projects/${Number(projectId) + 1}`}>
                    <PaginationRight>К следующему проекту</PaginationRight> <Forward />
                  </PaginationControl>
                )}
              </Pagination>
            </AsideContent>
          </Content>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default ProjectFullScreen;
