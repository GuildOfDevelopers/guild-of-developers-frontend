import React, { FC } from 'react';
import { Label } from './style';
import { useRegistrationStore } from '../../zustand-store';

interface Props {
  type: string;
  name: 'department' | 'stack' | 'date';
  // list: {
  //   name: string;
  //   isCheck: boolean;
  // }[];
}

const DropdownList: FC<Props> = ({ type, name }) => {
  const { departments } = useRegistrationStore();
  const list: { name: string; isCheck: boolean }[] = [];

  switch (name) {
    case 'department':
      list.push(...departments);
      break;
  }

  return (
    <>
      {list.map((i, index) => (
        <Label key={index}>
          <input type={type} value={i.name} checked={i.isCheck} />
          <span>{i.name}</span>
        </Label>
      ))}
    </>
  );
};

export default DropdownList;
