import React, { FC, useState, useCallback } from 'react';
import { ArrowDown, ArrowUp } from './Icon';
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
  title: string;
  departments: { name: string; stack: string[] }[];
  regFormUrl: string;
}

const Project: FC<ProjectProps> = ({ date, title, departments, regFormUrl }) => {
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
      <CardTitle>«{title}»</CardTitle>
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
            <p>
              {department.name}
              {toggle === department.name ? <ArrowUp /> : <ArrowDown />}
            </p>

            <Stack>
              {toggle === department.name
                ? department.stack.map((stack) => <Test key={stack}>{stack}</Test>)
                : ''}
            </Stack>
          </CardDepartment>
        ))}
      </CardDepartments>
      {regFormUrl !== '' ? (
        <CardButton href={regFormUrl} target="_blank">
          Записаться
        </CardButton>
      ) : (
        <CardButton href="#">Записаться</CardButton>
      )}
    </Card>
  );
};

export default Project;
