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

export interface ProjectProps {
  el: {
    id: string;
    title: string;
    description: string;
    finished: boolean; // не используется
    startDate: string;
    finishedDate: string; // не используется
    url: string; // не используется
    registrationFormUrl: string;
    departments: {
      name: string;
      stack: string[];
    }[];
    imageUrl: string; // не используется
    fond: string; // не используется
    participants: string; // не используется
    todo: string[]; // не используется
    WhatYouGet: string[]; // не используется
  };
}

const Project: FC<ProjectProps> = ({ el }) => {
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
      <CardDate>{el.startDate}</CardDate>
      <CardTitle>«{el.title}»</CardTitle>
      <CardDepartments>
        {el.departments.map((department) => (
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
      <CardButton to={`/projects/${el.id}`}>Записаться</CardButton>
    </Card>
  );
};

export default Project;
