import React, { FC } from 'react';
import { Wrapper, LeftFilter, FilterButtons } from './style';
import FilterOpen from './FilterOpen';
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

  const [isOpen, setIsOpen] = React.useState(false);

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

      <FilterButtons onClick={() => setIsOpen(!isOpen)}>
        <IconFilter />
      </FilterButtons>

      {isOpen && <FilterOpen />}
    </Wrapper>
  );
};

export default Filter;
