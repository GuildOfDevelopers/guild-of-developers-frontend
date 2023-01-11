import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useProjectStore } from '../../../zustand-store';
import ProjectForm from '../ProjectForm';
import { getProjects } from '../../../api';
import { ProjectProps } from '../Project';

const EditProject: FC = () => {
  const { data } = useQuery(['project'], getProjects);
  const { projectId } = useParams<{ projectId?: string }>();
  const [project, setProject] = useState<ProjectProps['project']>();

  const { date, role, changeInput, checkedDepartments, projectLink } = useProjectStore();

  useEffect(() => {
    const result = data?.find((item: any) => item.id === Number(projectId));
    setProject(result);
  }, [projectId, data]);

  return (
    <ProjectForm
      name={project?.title}
      date={date}
      description={project?.description}
      role={role}
      projectId={projectId}
      projectLink={projectLink}
      changeInput={changeInput}
      checkedDepartments={checkedDepartments}
    />
  );
};

export default EditProject;
