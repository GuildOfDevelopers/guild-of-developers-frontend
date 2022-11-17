/* eslint-disable @typescript-eslint/no-shadow */
import { FC } from 'react';
import { useProjectStore } from '../../../zustand-store';
import ProjectForm from '../ProjectForm';

const ProjectAdd: FC = () => {
  const { name, date, description, role, changeInput, checkedDepartments, projectLink } =
    useProjectStore();

  return (
    <ProjectForm
      name={name}
      date={date}
      description={description}
      role={role}
      changeInput={changeInput}
      checkedDepartments={checkedDepartments}
      projectLink={projectLink}
    />
  );
};

export default ProjectAdd;
