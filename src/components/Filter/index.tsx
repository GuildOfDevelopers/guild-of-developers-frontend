import React, { FC } from 'react';
import { Wrapper, LeftFilter, FilterButtons } from './style';
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
  );
};

export default Filter;
