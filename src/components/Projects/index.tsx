import React, { FC } from 'react';
import { Container } from '../../lib/styled/container';
import Filter from '../Filter';
import Project from './Project';
import { Grid, Section, Title, Wrapper } from './style';
// TODO: mockData перенести в ReduxToolkit
import mockCards from '../../mockCards.json';

interface ProjectsProps {
  page: string;
}

const ProjectsWithoutFilter: FC = () => {
  return (
    <Wrapper>
      <Title>Наши проекты</Title>
      <Grid>
        {mockCards.map((project) => (
          <Project key={project.id} project={project} />
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
        {mockCards.map((project) => (
          <Project key={project.id} project={project} />
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
