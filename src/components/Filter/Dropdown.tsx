import React, { FC } from 'react';
import { DropdownEl, FormButton, DropdownContent, Label } from './styleDropdown';

interface Props {
  item: {
    id: number;
    title: string;
    type: string;
    list: {
      name: string;
      value: string;
      val: boolean;
    }[];
    currentSelect: number;
    setCurrentSelect: React.Dispatch<React.SetStateAction<number>>;
  };
}

const Dropdown: FC<Props> = ({ item }) => {
  return (
    <DropdownEl className={item.currentSelect === item.id ? 'open' : ''}>
      <FormButton
        type="button"
        onClick={() =>
          item.currentSelect === item.id
            ? item.setCurrentSelect(-1)
            : item.setCurrentSelect(item.id)
        }
      >
        {item.title}
      </FormButton>

      <DropdownContent>
        {item.list.map((i, index) => {
          return (
            <Label key={index}>
              <input type={item.type} name={i.name} />
              <span>{i.value}</span>
            </Label>
          );
        })}
      </DropdownContent>
    </DropdownEl>
  );
};

export default Dropdown;
