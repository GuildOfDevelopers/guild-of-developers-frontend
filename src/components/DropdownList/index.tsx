import React, { FC } from 'react';
import { Label } from './style';

interface Props {
  type: string;
  list: {
    name: string;
    value: string;
    val: boolean;
  }[];
}

const DropdownList: FC<Props> = ({ type, list }) => {
  return (
    <>
      {list.map((i, index) => (
        <Label key={index}>
          <input type={type} name={i.name} value={i.value} />
          <span>{i.value}</span>
        </Label>
      ))}
    </>
  );
};

export default DropdownList;
