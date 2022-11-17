import React, { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Container } from '../../lib/styled/container';
import { Section, Wrapper, Title, Grid } from './style';
import Filter from '../Filter';
import Member from '../UI/Member';
import { getMembers } from '../../api/index';

const Members: FC = () => {
  const { isLoading, error, data } = useQuery(['members'], getMembers);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка</div>;

  return (
    <Section>
      <Container>
        <Wrapper>
          <Title>Наши гильдийцы</Title>
          <Filter page="guildMembers" />
          <Grid>
            {data?.map((member: any) => (
              <Member key={member.id} member={member} />
            ))}
          </Grid>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Members;
