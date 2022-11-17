import React, { FC } from 'react';
import {
  Card,
  CardImg,
  CardWrapper,
  CardDate,
  CardTitle,
  CardDescription,
  CardButton
} from './style';

const ProjectClosed: FC = () => {
  return (
    <Card>
      <CardImg src="#" />
      <CardWrapper>
        <CardDate>29.07.2022 - 10.11.2022</CardDate>
        <CardTitle>Инкубатор Фондов</CardTitle>
        <CardDescription>
          Проект, основной целью которого является создание платформы, которая будет оказывать
          помощь в развитии новых фондов и заниматься продвижением существующих. Если ты давно
          хотел(а) принять участие в разработке сложного и большого веб-приложения, то это твой
          шанс.
        </CardDescription>
        <CardButton>Подробнее</CardButton>
      </CardWrapper>
    </Card>
  );
};

export default ProjectClosed;
