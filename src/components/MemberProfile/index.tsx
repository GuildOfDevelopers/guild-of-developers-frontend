import React, { FC } from 'react';
import { Container } from '../../lib/styled/container';
import {
  Section,
  BackgroundImg,
  Info,
  Avatar,
  Member,
  MemberWrapper,
  MemberName,
  MemberStar,
  MemberUserName,
  Descr,
  DescrText,
  DescrList,
  DescrItem,
  DescrItemText,
  DescrItemLink
} from './style';
import {
  StarIcon,
  MailIcon,
  MapPinIcon,
  GithubIcon,
  FlagIcon,
  PhoneIcon,
  TelegramIcon
} from './icon';

const MemberProfile: FC = () => {
  return (
    <Section>
      <Container>
        <BackgroundImg src="#" />
        <Info>
          <Avatar src="#" />

          <Member>
            <MemberWrapper>
              <MemberName>Иван Иванов</MemberName>
              <MemberStar>
                <StarIcon />
              </MemberStar>
            </MemberWrapper>

            <MemberUserName>@iv.iv</MemberUserName>
          </Member>
        </Info>

        <Descr>
          <DescrText>
            Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.
            Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.
            Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми
            правилами. Эта парадигматическая страна, в которой жаренные члены предложения залетают
            прямо в рот.
          </DescrText>

          <DescrList>
            <DescrItem>
              <MapPinIcon />

              <DescrItemText>Москва</DescrItemText>
            </DescrItem>

            <DescrItem>
              <PhoneIcon />

              <DescrItemLink href="tel: +79101234567">+7 (910) 123-45-67</DescrItemLink>
            </DescrItem>

            <DescrItem>
              <MailIcon />

              <DescrItemLink href="mailto: iv.iv@mail.ru">iv.iv@mail.ru</DescrItemLink>
            </DescrItem>

            <DescrItem>
              <DescrItemLink href="#">
                <GithubIcon />
              </DescrItemLink>

              <DescrItemLink href="#">
                <TelegramIcon />
              </DescrItemLink>
            </DescrItem>

            <DescrItem>
              <FlagIcon />

              <DescrItemText>Состоит с 10.10.2022</DescrItemText>
            </DescrItem>
          </DescrList>
        </Descr>
      </Container>
    </Section>
  );
};

export default MemberProfile;
