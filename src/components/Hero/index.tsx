import React, { FC } from 'react';
import { Container } from '../../lib/styled/container';
import {
  Section,
  Wrapper,
  Greetings,
  Title,
  Descr,
  DescrSpan,
  Members,
  MembersItem,
  MembersIcon,
  MembersDescr,
  MembersAmount,
  MembersName
} from './style';
const token = '54LjlkjasdlkfjlKJLKJlak4kKjjl10u5k2jlkfNLKJlkfjlkasdjflkjasl13f';

interface Member {
  amount: number;
  name: string;
}

const Hero: FC = () => {
  const members: Member[] = [
    {
      amount: 187,
      name: 'участников Гильдии'
    },
    {
      amount: 8,
      name: 'проектов в разработке'
    },
    {
      amount: 6,
      name: 'месяцев на рынке'
    }
  ];

  return (
    <Section>
      <Container>
        <Wrapper>
          <Greetings>
            <Title>GoD / Guild of Developers</Title>

            <Descr>
              Помогаем начинающим IT&nbsp;специалистам получить коммерческий опыт
              <DescrSpan> абсолютно бесплатно.</DescrSpan>
            </Descr>
          </Greetings>

          <Members>
            {members.map((item, index) => (
              <MembersItem key={index}>
                <MembersIcon />

                <MembersDescr>
                  <MembersAmount>{item.amount}</MembersAmount>
                  <MembersName>{item.name}</MembersName>
                </MembersDescr>
              </MembersItem>
            ))}
          </Members>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Hero;
