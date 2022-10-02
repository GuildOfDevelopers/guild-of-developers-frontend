import React, { FC } from 'react';
import { Container } from '../../lib/styled/container';
import { Section, Wrapper, Title, Grid } from './style';
import Filter from '../Filter';
import Member from './Member';
import mockMembers from '../../mockMembers.json';

const Members: FC = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Title>Наши гильдийцы</Title>
          <Filter page="guildMembers" />
          <Grid>
            {mockMembers.map((member) => (
              <Member key={member.id} member={member} />
            ))}
          </Grid>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Members;
