import React, { FC } from 'react';
import { Container } from '../../lib/styled/container';
import { Card, Grid, Section } from './style';

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
    </Card>
  );
};

const Projects: FC = () => {
  return (
    <Section>
      <Container>
        <Grid>
          {mockCards.map((card) => (
            <Project project={card.project} descr={card.descr} id={card.id} key={card.id} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Projects;
