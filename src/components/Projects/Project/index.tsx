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
  StackItem
} from './style';

interface ProjectProps {
  date: string;
  title: string;
  departments: { name: string; stack: string[] }[];
  regFormUrl: string;
}

const Project: FC<ProjectProps> = ({ date, title, departments, regFormUrl }) => {
  const [toggle, setToggle] = useState('');

  const handleSetToggle = useCallback(
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
              handleSetToggle(department.name);
            }}
          >
            <p>
              {department.name}
              {toggle === department.name ? <ArrowUp /> : <ArrowDown />}
            </p>

            <Stack>
              {toggle === department.name
                ? department.stack.map((stack) => <StackItem key={stack}>{stack}</StackItem>)
                : ''}
            </Stack>
          </CardDepartment>
        ))}
      </CardDepartments>
      {/* TODO: ниже веременный костыль т.к. не у всех карточек есть ссылки на форму регистрации */}
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
