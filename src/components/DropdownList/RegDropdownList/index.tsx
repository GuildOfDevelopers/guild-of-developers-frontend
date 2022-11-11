import React, { FC } from 'react';
import { Label } from '../style';
import { useRegistrationStore } from '../../../zustand-store';

interface Props {
  type: 'checkbox' | 'radio';
  name: 'department' | 'stack' | 'date';
  departmentName?: string;
}

const RegDropdownList: FC<Props> = ({ type, name, departmentName }) => {
  const { departments, changeDeparments, changeStack } = useRegistrationStore();
  const list: { name: string; isCheck: boolean }[] = [];

  switch (name) {
    case 'department':
      list.push(...departments);
      break;
    case 'stack':
      const [value] = departments
        .filter((item) => item.name === departmentName)
        .map((item) => item.stack);
      list.push(...value);
      break;
  }

  const handler = (item: string) => {
    if (name === 'department') {
      changeDeparments(item);
    }

    if (name === 'stack') {
      changeStack(departmentName || '', item);
    }
  };

  return (
    <>
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

export default RegDropdownList;
