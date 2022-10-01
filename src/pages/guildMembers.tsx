import React, { FC } from 'react';
import { Container } from '../lib/styled/container';
import Filter from '../components/Filter';

const GuildMembers: FC = () => {
  return (
    <Container>
      <Filter page="guildMembers" />
      <p style={{ textAlign: 'center' }}>GuildMembers</p>
    </Container>
  );
};

export default GuildMembers;
