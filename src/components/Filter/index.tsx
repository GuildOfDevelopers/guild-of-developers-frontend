import React, { FC } from 'react';
import { Container } from '../../lib/styled/container';
import { Section, Wrapper, LeftFilter, FilterButtons } from './style';
import { IconFilter } from './Icon';

const Filter: FC = () => {
  const [currentMenu, setCurrentMenu] = React.useState(0);
  const menu = [
    {
      id: 0,
      title: 'Текущие'
    },
    {
      id: 1,
      title: 'Выполненные'
    }
  ];

  return (
    <Section>
      <Container>
        <Wrapper>
          <LeftFilter>
            {menu.map((item) => (
              <FilterButtons
                key={item.id}
                className={currentMenu === item.id ? 'active' : ''}
                onClick={() => setCurrentMenu(item.id)}
              >
                {item.title}
              </FilterButtons>
            ))}
          </LeftFilter>

          <FilterButtons>
            <IconFilter />
          </FilterButtons>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Filter;
