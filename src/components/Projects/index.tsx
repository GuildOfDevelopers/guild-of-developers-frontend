import React, { FC, useState } from 'react';
import { Container } from '../../lib/styled/container';
import { CardButton, Card, Grid, Section, Title, Wrapper } from './style';

const mockCards = [
  {
    project: 'project',
    descr: 'descr',
    id: 1
  },
  {
    project: 'project',
    descr: 'descr',
    id: 2
  },
  {
    project: 'project',
    descr: 'descr',
    id: 3
  },
  {
    project: 'project',
    descr: 'descr',
    id: 4
  },
  {
    project: 'project',
    descr: 'descr',
    id: 5
  },
  {
    project: 'project',
    descr: 'descr',
    id: 6
  }
];

interface ProjectProps {
  project: string;
  descr: string;
  id: number;
}

const Project: FC<ProjectProps> = ({ project, descr, id }) => {
  return (
    <Card>
      <div>{project}</div>
      <div>{descr}</div>
      <div>{id}</div>
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
                <Project project={el.project} descr={el.descr} id={el.id} key={el.id} />
              ))}
            </Grid>
          </Wrapper>
        )}
      </Container>
    </Section>
  );
};

export default Projects;
