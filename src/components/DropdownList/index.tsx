import React, { FC } from 'react';
import RegDropdownList from './RegDropdownList';
import FilterDropdownList from './FilterDropdownList';
import ProjectDropdownList from './ProjectDropdownList';

interface Props {
  page: 'registrationForm' | 'filter' | 'addProject';
  type: 'checkbox' | 'radio';
  name: 'department' | 'stack' | 'date';
  departmentName?: string;
}

const DropdownList: FC<Props> = ({ page, type, name, departmentName }) => {
  return (
    <>
      {page === 'registrationForm' && (
        <RegDropdownList type={type} name={name} departmentName={departmentName} />
      )}
      {page === 'filter' && <FilterDropdownList type={type} name={name} />}
      {page === 'addProject' && <ProjectDropdownList type={type} name={name} />}
    </>
  );
};

export default DropdownList;
