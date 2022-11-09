import React, { FC } from 'react';
import { Label, Warning } from '../style';
import { useFilterStore } from '../../../zustand-store';

interface Props {
  type: 'checkbox' | 'radio';
  name: 'department' | 'stack' | 'date';
}

const FilterDropdownList: FC<Props> = ({ type, name }) => {
  const { departments, currentStack, date, changeDeparments, changeCurrentStack, changeDate } =
    useFilterStore();
  const list: { name: string; isCheck: boolean }[] = [];

  switch (name) {
    case 'department':
      list.push(...departments);
      break;
    case 'stack':
      list.push(...currentStack);
      break;
    case 'date':
      list.push(...date);
      break;
  }

  const handler = (item: string) => {
    if (name === 'department') {
      changeDeparments(item);
    }

    if (name === 'stack') {
      changeCurrentStack(item);
    }

    if (name === 'date') {
      changeDate(item);
    }
  };

  return (
    <>
      {!list.length && <Warning>Сначала выберете направление</Warning>}
      {list.map((i, index) => (
        <Label key={index}>
          <input type={type} value={i.name} checked={i.isCheck} onChange={() => handler(i.name)} />
          <span>{i.name}</span>
        </Label>
      ))}
    </>
  );

  return <></>;
};

export default FilterDropdownList;
