import React, { FC } from 'react';
import { Container } from '../../lib/styled/container';
import Filter from '../Filter';
import Project from './Project';
import { Grid, Section, Title, Wrapper } from './style';

const mockCards = [
  {
    id: 1,
    date: '29.08.2022',
    project: '«Инкубатор Фондов»',
    departments: [
      { name: 'Frontend', stack: ['React', 'Redux', 'Sass', 'Axios'] },
      { name: 'Backend', stack: ['Python', 'FastAPI', 'Django'] },
      { name: 'Design', stack: ['Figma', 'Photoshop'] },
      { name: 'UI/UX', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Тестировщик ПО', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Project-менеджер', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Безопасник', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Контроллёр', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Data Scientist', stack: ['какой-то', 'тут', 'стек'] }
    ]
  },
  {
    id: 2,
    date: '29.08.2022',
    project: '«Инкубатор Фондов»',
    departments: [
      { name: 'Frontend', stack: ['React', 'Redux', 'Sass', 'Axios'] },
      { name: 'Backend', stack: ['Python', 'FastAPI', 'Django'] },
      { name: 'Design', stack: ['Figma', 'Photoshop'] },
      { name: 'UI/UX', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Тестировщик ПО', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Project-менеджер', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Безопасник', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Контроллёр', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Data Scientist', stack: ['какой-то', 'тут', 'стек'] }
    ]
  },
  {
    id: 3,
    date: '29.08.2022',
    project: '«Инкубатор Фондов»',
    departments: [
      { name: 'Frontend', stack: ['React', 'Redux', 'Sass', 'Axios'] },
      { name: 'Backend', stack: ['Python', 'FastAPI', 'Django'] },
      { name: 'Design', stack: ['Figma', 'Photoshop'] },
      { name: 'UI/UX', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Тестировщик ПО', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Project-менеджер', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Безопасник', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Контроллёр', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Data Scientist', stack: ['какой-то', 'тут', 'стек'] }
    ]
  },
  {
    id: 4,
    date: '29.08.2022',
    project: '«Инкубатор Фондов»',
    departments: [
      { name: 'Frontend', stack: ['React', 'Redux', 'Sass', 'Axios'] },
      { name: 'Backend', stack: ['Python', 'FastAPI', 'Django'] },
      { name: 'Design', stack: ['Figma', 'Photoshop'] },
      { name: 'UI/UX', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Тестировщик ПО', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Project-менеджер', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Безопасник', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Контроллёр', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Data Scientist', stack: ['какой-то', 'тут', 'стек'] }
    ]
  },
  {
    id: 5,
    date: '29.08.2022',
    project: '«Инкубатор Фондов»',
    departments: [
      { name: 'Frontend', stack: ['React', 'Redux', 'Sass', 'Axios'] },
      { name: 'Backend', stack: ['Python', 'FastAPI', 'Django'] },
      { name: 'Design', stack: ['Figma', 'Photoshop'] },
      { name: 'UI/UX', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Тестировщик ПО', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Project-менеджер', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Безопасник', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Контроллёр', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Data Scientist', stack: ['какой-то', 'тут', 'стек'] }
    ]
  },
  {
    id: 6,
    date: '29.08.2022',
    project: '«Инкубатор Фондов»',
    departments: [
      { name: 'Frontend', stack: ['React', 'Redux', 'Sass', 'Axios'] },
      { name: 'Backend', stack: ['Python', 'FastAPI', 'Django'] },
      { name: 'Design', stack: ['Figma', 'Photoshop'] },
      { name: 'UI/UX', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Тестировщик ПО', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Project-менеджер', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Безопасник', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Контроллёр', stack: ['какой-то', 'тут', 'стек'] },
      { name: 'Data Scientist', stack: ['какой-то', 'тут', 'стек'] }
    ]
  }
];

interface ProjectsProps {
  page: string;
}

const ProjectsWithoutFilter: FC = () => {
  return (
    <Wrapper>
      <Title>Наши проекты</Title>
      <Grid>
        {mockCards.map((el) => (
          <Project project={el.project} departments={el.departments} date={el.date} key={el.id} />
        ))}
      </Grid>
    </Wrapper>
  );
};

const ProjectsWithFilter: FC = () => {
  return (
    <Wrapper>
      <Title>Проекты</Title>
      <Filter />
      <Grid>
        {mockCards.map((el) => (
          <Project project={el.project} departments={el.departments} date={el.date} key={el.id} />
        ))}
      </Grid>
    </Wrapper>
  );
};

const Projects: FC<ProjectsProps> = ({ page }) => {
  return (
    <Section>
      <Container>
        {page === 'home' && <ProjectsWithoutFilter />}
        {page === 'projects' && <ProjectsWithFilter />}
      </Container>
    </Section>
  );
};

export default Projects;
