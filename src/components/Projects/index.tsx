import React, { FC, useState, useId } from 'react';
import { Container } from '../../lib/styled/container';
import {
  CardButton,
  Card,
  Grid,
  Section,
  Title,
  Wrapper,
  CardTitle,
  CardDate,
  CardDepartments,
  CardDepartment
} from './style';

const mockCards = [
  {
    id: 1,
    date: '29.08.2022',
    project: '«Инкубатор Фондов»',
    departments: [
      { name: 'Frontend', stack: 'React, Redux, Sass, Axios' },
      { name: 'Backend', stack: 'Python, FastAPI, Django' },
      { name: 'Design', stack: 'Figma, Photoshop, Blender' },
      { name: 'Frontend2', stack: 'React, Redux, Sass, Axios' },
      { name: 'Backend2', stack: 'Python, FastAPI, Django' },
      { name: 'Design2', stack: 'Figma, Photoshop, Blender' },
      { name: 'Frontend3', stack: 'React, Redux, Sass, Axios' },
      { name: 'Backend3', stack: 'Python, FastAPI, Django' },
      { name: 'Design3', stack: 'Figma, Photoshop, Blender' }
    ]
  },
  {
    id: 2,
    date: '29.08.2022',
    project: '«Инкубатор Фондов»',
    departments: [
      { name: 'Frontend', stack: 'React, Redux, Sass, Axios' },
      { name: 'Backend', stack: 'Python, FastAPI, Django' },
      { name: 'Design', stack: 'Figma, Photoshop, Blender' },
      { name: 'Frontend2', stack: 'React, Redux, Sass, Axios' },
      { name: 'Backend2', stack: 'Python, FastAPI, Django' },
      { name: 'Design2', stack: 'Figma, Photoshop, Blender' },
      { name: 'Frontend3', stack: 'React, Redux, Sass, Axios' },
      { name: 'Backend3', stack: 'Python, FastAPI, Django' },
      { name: 'Design3', stack: 'Figma, Photoshop, Blender' }
    ]
  },
  {
    id: 3,
    date: '29.08.2022',
    project: '«Инкубатор Фондов»',
    departments: [
      { name: 'Frontend', stack: 'React, Redux, Sass, Axios' },
      { name: 'Backend', stack: 'Python, FastAPI, Django' },
      { name: 'Design', stack: 'Figma, Photoshop, Blender' },
      { name: 'Frontend2', stack: 'React, Redux, Sass, Axios' },
      { name: 'Backend2', stack: 'Python, FastAPI, Django' },
      { name: 'Design2', stack: 'Figma, Photoshop, Blender' },
      { name: 'Frontend3', stack: 'React, Redux, Sass, Axios' },
      { name: 'Backend3', stack: 'Python, FastAPI, Django' },
      { name: 'Design3', stack: 'Figma, Photoshop, Blender' }
    ]
  },
  {
    id: 4,
    date: '29.08.2022',
    project: '«Инкубатор Фондов»',
    departments: [
      { name: 'Frontend', stack: 'React, Redux, Sass, Axios' },
      { name: 'Backend', stack: 'Python, FastAPI, Django' },
      { name: 'Design', stack: 'Figma, Photoshop, Blender' },
      { name: 'Frontend2', stack: 'React, Redux, Sass, Axios' },
      { name: 'Backend2', stack: 'Python, FastAPI, Django' },
      { name: 'Design2', stack: 'Figma, Photoshop, Blender' },
      { name: 'Frontend3', stack: 'React, Redux, Sass, Axios' },
      { name: 'Backend3', stack: 'Python, FastAPI, Django' },
      { name: 'Design3', stack: 'Figma, Photoshop, Blender' }
    ]
  },
  {
    id: 5,
    date: '29.08.2022',
    project: '«Инкубатор Фондов»',
    departments: [
      { name: 'Frontend', stack: 'React, Redux, Sass, Axios' },
      { name: 'Backend', stack: 'Python, FastAPI, Django' },
      { name: 'Design', stack: 'Figma, Photoshop, Blender' },
      { name: 'Frontend2', stack: 'React, Redux, Sass, Axios' },
      { name: 'Backend2', stack: 'Python, FastAPI, Django' },
      { name: 'Design2', stack: 'Figma, Photoshop, Blender' },
      { name: 'Frontend3', stack: 'React, Redux, Sass, Axios' },
      { name: 'Backend3', stack: 'Python, FastAPI, Django' },
      { name: 'Design3', stack: 'Figma, Photoshop, Blender' }
    ]
  },
  {
    id: 6,
    date: '29.08.2022',
    project: '«Инкубатор Фондов»',
    departments: [
      { name: 'Frontend', stack: 'React, Redux, Sass, Axios' },
      { name: 'Backend', stack: 'Python, FastAPI, Django' },
      { name: 'Design', stack: 'Figma, Photoshop, Blender' },
      { name: 'Frontend2', stack: 'React, Redux, Sass, Axios' },
      { name: 'Backend2', stack: 'Python, FastAPI, Django' },
      { name: 'Design2', stack: 'Figma, Photoshop, Blender' },
      { name: 'Frontend3', stack: 'React, Redux, Sass, Axios' },
      { name: 'Backend3', stack: 'Python, FastAPI, Django' },
      { name: 'Design3', stack: 'Figma, Photoshop, Blender' }
    ]
  }
];

interface ProjectProps {
  date: string;
  project: string;
  departments: { name: string; stack: string }[];
}

const Project: FC<ProjectProps> = ({ date, project, departments }) => {
  const [toggle, setToggle] = useState('');

  return (
    <Card>
      <CardDate>{date}</CardDate>
      <CardTitle>{project}</CardTitle>
      <CardDepartments>
        {departments.map((department) => (
          <CardDepartment
            toggle={toggle}
            dep={department.name}
            key={department.name}
            onClick={() => {
              if (toggle === department.name) {
                setToggle('');
              } else {
                setToggle(department.name);
              }
            }}
          >
            <p>{toggle === department.name ? `${department.stack}` : `${department.name}`}</p>
          </CardDepartment>
        ))}
      </CardDepartments>
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
