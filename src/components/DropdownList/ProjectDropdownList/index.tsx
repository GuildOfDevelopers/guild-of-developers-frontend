import React, { FC } from 'react';
import { Label } from '../style';
import { useProjectStore } from '../../../zustand-store';

interface Props {
  type: 'checkbox' | 'radio';
  name: 'department' | 'stack' | 'date';
  departmentName?: string;
}

const ProjectDropdownList: FC<Props> = ({ type, name }) => {
  const { departments, changeDepartments } = useProjectStore();
  const list: { name: string; isCheck: boolean }[] = [];

  switch (name) {
    case 'department':
      list.push(...departments);
      break;
  }

  const handler = (item: string) => {
    if (name === 'department') {
      changeDepartments(item);
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
};

export default ProjectDropdownList;
