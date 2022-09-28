import React, { FC } from 'react';
import { Container } from '../../../lib/styled/container';
import { Section, Title, Wrapper, Button } from './style';

const ProjectFullScreen: FC = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Title>Подробное описание проекта</Title>
          <Button>Ссылка</Button>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default ProjectFullScreen;
