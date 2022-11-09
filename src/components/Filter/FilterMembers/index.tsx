import React, { FC } from 'react';
import { Menu } from '@headlessui/react';
import {
  Wrapper,
  TopFilter,
  BottomFilter,
  BottomFilterButton,
  SearchButtonFilter,
  MenuButton,
  MenuItems
} from './style';
import FilterOpen from '../FilterOpen';
import { IconFilter } from './Icon';
import { useFilterStore } from '../../../zustand-store';

const FilterMembers: FC = () => {
  const { departments, changeDeparments } = useFilterStore();
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
        <SearchButtonFilter wip>Поиск</SearchButtonFilter>

        <Menu>
          <MenuButton>
            <IconFilter />
          </MenuButton>

          <MenuItems>
            <FilterOpen />
          </MenuItems>
        </Menu>
      </TopFilter>

      <BottomFilter>
        {departments.map((item, i) => (
          <BottomFilterButton
            key={i}
            active={item.isCheck}
            onClick={() => changeDeparments(item.name)}
          >
            {item.name}
          </BottomFilterButton>
        ))}
      </BottomFilter>
    </Wrapper>
  );
};

export default FilterMembers;
