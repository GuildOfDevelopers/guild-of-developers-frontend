import React, { FC, useState, useCallback } from 'react';
import {
  CardButton,
  Card,
  CardTitle,
  CardDate,
  CardDepartments,
  CardDepartment,
  Stack,
  Test
} from './style';

interface ProjectProps {
  date: string;
  project: string;
  departments: { name: string; stack: string[] }[];
}

const Project: FC<ProjectProps> = ({ date, project, departments }) => {
  const [toggle, setToggle] = useState('');

  const test = useCallback(
    (name: string) => (toggle === name ? setToggle('') : setToggle(name)),
    [setToggle, toggle]
  );

  return (
    <Card
      onClick={() => {
        setToggle('');
      }}
    >
      <CardDate>{date}</CardDate>
      <CardTitle>{project}</CardTitle>
      <CardDepartments>
        {departments.map((department) => (
          <CardDepartment
            key={department.name}
            dep={department.name}
            toggle={toggle}
            onClick={(e) => {
              e.stopPropagation();
              test(department.name);
            }}
          >
            <p>{department.name}</p>
            <Stack>
              {toggle === department.name
                ? department.stack.map((stack) => <Test>{stack}</Test>)
                : ''}
            </Stack>
          </CardDepartment>
        ))}
      </CardDepartments>
      <CardButton>Записаться</CardButton>
    </Card>
  );
};

export default Project;
