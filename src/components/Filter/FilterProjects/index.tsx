import React, { FC } from 'react';
import { Menu } from '@headlessui/react';
import { Wrapper, LeftFilter, FilterButtons, MenuButton, MenuItems } from './style';
import FilterOpen from '../FilterOpen';
import { IconFilter } from './Icon';
import { useFilterStore } from '../../../zustand-store';

const FilterProjects: FC = () => {
  const { projectsType, changeProjectsType } = useFilterStore();

  return (
    <Wrapper>
      <LeftFilter>
        {projectsType.map((item, i) => (
          <FilterButtons
            key={i}
            active={item.isCheck}
            onClick={() => changeProjectsType(item.name)}
          >
            {item.name}
          </FilterButtons>
        ))}
      </LeftFilter>

      <Menu>
        <MenuButton>
          <IconFilter />
        </MenuButton>

        <MenuItems>
          <FilterOpen />
        </MenuItems>
      </Menu>
    </Wrapper>
  );
};

export default FilterProjects;
