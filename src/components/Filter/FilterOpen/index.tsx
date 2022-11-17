import React, { FC } from 'react';
import { Form, FormName, FormWrapper, Submit, Select, MenuButton, MenuItems } from './style';
import { Menu } from '@headlessui/react';
import DropdownList from '../../DropdownList';

const FilterOpen: FC = () => {
  return (
    <Form>
      <FormName>Фильтр</FormName>

      <FormWrapper>
        <Select>
          <Menu>
            <MenuButton>Направление</MenuButton>

            <MenuItems>
              <DropdownList page="filter" type="checkbox" name="department" />
            </MenuItems>
          </Menu>
        </Select>

        <Select>
          <Menu>
            <MenuButton>Стек</MenuButton>

            <MenuItems>
              <DropdownList page="filter" type="checkbox" name="stack" />
            </MenuItems>
          </Menu>
        </Select>

        <Select>
          <Menu>
            <MenuButton>Дата</MenuButton>

            <MenuItems>
              <DropdownList page="filter" type="radio" name="date" />
            </MenuItems>
          </Menu>
        </Select>

        <Submit onClick={(e) => e.preventDefault()}>Показать</Submit>
      </FormWrapper>
    </Form>
  );
};

export default FilterOpen;
