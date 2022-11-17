import { FC } from 'react';
import { BlancImage, CardEditIcon } from './icon';
import {
  ImageBox,
  Card,
  CardImage,
  Date,
  Department,
  DepartmentBox,
  Footer,
  Main,
  ProjectLink,
  SubTitle,
  Text,
  Title,
  CardEdit
} from './style';

interface IProjectProps {
  card: {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    role: string;
    department: string[];
    date: string;
  };
}

const Project: FC<IProjectProps> = ({ card }) => {
  return (
    <Card>
      <ImageBox>
        {card.imageUrl ? <CardImage src={card.imageUrl} alt="обложка" /> : <BlancImage />}
        <CardEdit to={`/profile/projects/${card.id}`}>
          <CardEditIcon />
        </CardEdit>
      </ImageBox>
      <Main>
        <Date>{card.date}</Date>
        <Title>{card.name}</Title>
        <Text>{card.description}</Text>
        <SubTitle>Роль в команде</SubTitle>
        <Text>{card.role}</Text>
        <SubTitle>Направление</SubTitle>
        <Footer>
          <DepartmentBox>
            {card.department.map((dep, idx) => (
              <Department key={idx}>{dep}</Department>
            ))}
          </DepartmentBox>
          <ProjectLink to={`/projects/${card.id}`}>Подробнее</ProjectLink>
        </Footer>
      </Main>
    </Card>
  );
};

export default Project;
