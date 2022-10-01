import React, { FC } from 'react';
import { Menu } from '@headlessui/react';
import { Wrapper, LeftFilter, FilterButtons } from './style';
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
          <FilterButtons
            key={item.id}
            className={currentMenu === item.id ? 'active' : ''}
            onClick={() => setCurrentMenu(item.id)}
          >
            {item.title}
          </FilterButtons>
        ))}
      </LeftFilter>

      <Menu>
        <Menu.Button>
          <IconFilter />
        </Menu.Button>

        <Menu.Items className="filter-open">
          <FilterOpen />
        </Menu.Items>
      </Menu>
    </Wrapper>
  );
};

export default FilterProjects;
