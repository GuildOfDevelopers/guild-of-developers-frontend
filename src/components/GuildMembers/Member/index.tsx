import React, { FC } from 'react';
import { BoldText, Border, Card, MemberInfo, More, Name, Nick, Photo, Plank, Text } from './style';

interface IMemberCard {
  image: string;
  fullName: string;
  nick: string;
  jobTitle: string;
  stack: string;
  projects: string;
  time: string;
  more: string;
}

const MemberCard: FC<IMemberCard> = ({
  image,
  fullName,
  nick,
  jobTitle,
  stack,
  projects,
  time,
  more
}) => {
  return (
    <>
      <Card>
        <Photo src={image} />
        <MemberInfo>
          <Border>
            <Name>{fullName}</Name>
            <Nick>{nick}</Nick>
          </Border>
          <Border>
            <BoldText>Должность</BoldText>
            <Plank>{jobTitle}</Plank>
            <BoldText>Стек</BoldText>
            <Plank>{stack}</Plank>
          </Border>
          <Border>
            <Text>
              Участие в проектах <BoldText>{projects}</BoldText>
            </Text>
            <Text>
              Состоит в Гильдии <BoldText>{time}</BoldText>
            </Text>
            <More href={more}>Подробнее</More>
          </Border>
        </MemberInfo>
      </Card>
    </>
  );
};

export default MemberCard;
