import React, { FC } from 'react';
import { Menu } from '@headlessui/react';
import { Wrapper, TopFilter, BottomFilter, BottomFilterButton, FilterButtons } from './style';
import FilterOpen from '../FilterOpen';
import { IconFilter } from './Icon';

const FilterMembers: FC = () => {
  const [currentMenu, setCurrentMenu] = React.useState(-1);
  const menu = [
    {
      id: 0,
      title: 'Backend'
    },
    {
      id: 1,
      title: 'Frontend'
    },
    {
      id: 2,
      title: 'UX/UI'
    },
    {
      id: 3,
      title: 'Тестировщик ПО'
    },
    {
      id: 4,
      title: 'Безопасник'
    },
    {
      id: 5,
      title: 'Project-менеджер'
    },
    {
      id: 6,
      title: 'Контролёр'
    },
    {
      id: 7,
      title: 'Data Scientist'
    }
  ];

  return (
    <Wrapper>
      <TopFilter>
        <FilterButtons wip="true" className="active">
          Поиск
        </FilterButtons>

        <Menu>
          <Menu.Button>
            <IconFilter />
          </Menu.Button>

          <Menu.Items className="filter-open">
            <FilterOpen />
          </Menu.Items>
        </Menu>
      </TopFilter>

      <BottomFilter>
        {menu.map((item) => (
          <BottomFilterButton
            key={item.id}
            className={currentMenu === item.id ? 'active' : ''}
            onClick={() => (currentMenu === item.id ? setCurrentMenu(-1) : setCurrentMenu(item.id))}
          >
            {item.title}
          </BottomFilterButton>
        ))}
      </BottomFilter>
    </Wrapper>
  );
};

export default FilterMembers;
