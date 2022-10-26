import React, { FC } from 'react';
import { Menu } from '@headlessui/react';
import { Wrapper, LeftFilter, FilterButton } from './style';
import FilterOpen from '../FilterOpen';
import { IconFilter } from './Icon';

const FilterProjects: FC = () => {
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
          <FilterButton
            key={item.id}
            active={currentMenu === item.id ? true : false}
            onClick={() => setCurrentMenu(item.id)}
          >
            {item.title}
          </FilterButton>
        ))}
      </LeftFilter>

      <Menu as="div" className="filter">
        <Menu.Button className="filter__button">
          <IconFilter />
        </Menu.Button>

        <Menu.Items className="filter__items">
          <FilterOpen />
        </Menu.Items>
      </Menu>
    </Wrapper>
  );
};

export default FilterProjects;
