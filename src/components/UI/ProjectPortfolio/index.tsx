import React, { FC } from 'react';
import {
  Card,
  CardImg,
  CardWrapper,
  CardDate,
  CardTitle,
  CardDescription,
  CardButton,
  CardRole,
  CardTitleSmall,
  CardRoleItem,
  CardStack,
  CardStackWrapper,
  CardStackItem
} from './style';

const ProjectPortfolio: FC = () => {
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

        <CardTitleSmall>Роль в команде</CardTitleSmall>

        <CardRole>
          <CardRoleItem>Роль в команде</CardRoleItem>
          <CardRoleItem>Роль в команде</CardRoleItem>
          <CardRoleItem>Роль в команде</CardRoleItem>
          <CardRoleItem>Роль в команде</CardRoleItem>
          <CardRoleItem>Роль в команде</CardRoleItem>
          <CardRoleItem>Роль в команде</CardRoleItem>
          <CardRoleItem>Роль в команде</CardRoleItem>
        </CardRole>

        <CardTitleSmall>Направление</CardTitleSmall>

        <CardStack>
          <CardStackWrapper>
            <CardStackItem>Backend</CardStackItem>
            <CardStackItem>Data Scientist</CardStackItem>
          </CardStackWrapper>

          <CardButton>Подробнее</CardButton>
        </CardStack>
      </CardWrapper>
    </Card>
  );
};

export default ProjectPortfolio;
