import React, { FC, useState } from 'react';
import { Container } from '../../lib/styled/container';
import { CardButton, Card, Grid, Section, Title, Wrapper } from './style';

const mockCards = [
  {
    id: 1,
    date: '29.08.2022',
    project: '«Инкубатор Фондов»',
    departments: [
      { name: 'Frontend', stack: ['React', 'Redux', 'Sass', 'Axios'] },
      { name: 'Backend', stack: ['Python', 'FastAPI', 'Django'] },
      { name: 'Design', stack: ['Figma', 'Photoshop', 'Blender'] }
    ]
  },
  {
    id: 2,
    date: '29.08.2022',
    project: '«Инкубатор Фондов»',
    departments: [
      { name: 'Frontend', stack: ['React', 'Redux', 'Sass', 'Axios'] },
      { name: 'Backend', stack: ['Python', 'FastAPI', 'Django'] },
      { name: 'Design', stack: ['Figma', 'Photoshop', 'Blender'] }
    ]
  },
  {
    id: 3,
    date: '29.08.2022',
    project: '«Инкубатор Фондов»',
    departments: [
      { name: 'Frontend', stack: ['React', 'Redux', 'Sass', 'Axios'] },
      { name: 'Backend', stack: ['Python', 'FastAPI', 'Django'] },
      { name: 'Design', stack: ['Figma', 'Photoshop', 'Blender'] }
    ]
  },
  {
    id: 4,
    date: '29.08.2022',
    project: '«Инкубатор Фондов»',
    departments: [
      { name: 'Frontend', stack: ['React', 'Redux', 'Sass', 'Axios'] },
      { name: 'Backend', stack: ['Python', 'FastAPI', 'Django'] },
      { name: 'Design', stack: ['Figma', 'Photoshop', 'Blender'] }
    ]
  }
];

interface ProjectProps {
  id: number;
  date: string;
  project: string;
  departments: { name: string; stack: string[] }[];
}

const Project: FC<ProjectProps> = ({ id, date, project, departments }) => {
  const [hover, setHover] = useState('');
  console.log(hover);

  return (
    <Card>
      <span>{date}</span>
      <h3>{project}</h3>
      <div>
        {departments.map((department) => (
          <div
            onMouseEnter={() => setHover(department.name.toLowerCase())}
            onMouseLeave={() => setHover('')}
          >
            {hover === department.name.toLowerCase()
              ? department.stack.map((stack) => <p>{stack}</p>)
              : department.name}
          </div>
        ))}
      </div>
      <CardButton>Записаться</CardButton>
    </Card>
  );
};

const Projects: FC = () => {
  const [page] = useState('home');

  return (
    <Section>
      <Container>
        {page === 'home' && (
          <Wrapper>
            <Title>Наши проекты</Title>
            <Grid>
              {mockCards.map((el) => (
                <Project
                  project={el.project}
                  departments={el.departments}
                  date={el.date}
                  id={el.id}
                  key={el.id}
                />
              ))}
            </Grid>
          </Wrapper>
        )}
      </Container>
    </Section>
  );
};

export default Projects;
