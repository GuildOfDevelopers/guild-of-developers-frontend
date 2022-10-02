import React, { FC } from 'react';
import { Container } from '../../lib/styled/container';
import { Grid, Section, Title, Wrapper } from './style';

import MemberCard from './Member';

const Members: FC = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Title>Наши гильдийцы</Title>
          <Grid>
            <MemberCard
              image={''}
              fullName={'Фамилия Имя'}
              nick={'@ник'}
              jobTitle={'Backend'}
              stack={'Python'}
              projects={''}
              time={''}
              more={''}
            />
            <MemberCard
              image={''}
              fullName={'Фамилия Имя'}
              nick={'@ник'}
              jobTitle={'Backend'}
              stack={'Python'}
              projects={''}
              time={''}
              more={''}
            />
          </Grid>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Members;
