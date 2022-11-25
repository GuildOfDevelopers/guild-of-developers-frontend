import React, { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from '../../lib/styled/container';
import {
  Section,
  BackgroundImg,
  Info,
  InfoChange,
  Avatar,
  Member,
  MemberWrapper,
  MemberName,
  MemberStar,
  MemberUserName,
  Rating,
  RatingPoints,
  RatingPointsValue,
  RatingStar,
  RatingStarList,
  RatingStarItem,
  RatingCaption,
  RatingInfo,
  Descr,
  DescrText,
  DescrList,
  DescrItem,
  DescrItemText,
  DescrItemLink,
  Skills,
  SkillsItem,
  SkillsDepartment,
  SkillsStackList,
  SkillsStackItem,
  Projects,
  Portfolio,
  ProfileTitle,
  HorizontalLine,
  OtherMembers
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
import MemberItem from '../UI/Member';
import ProjectClosed from '../UI/ProjectClosed';
import ProjectPortfolio from '../UI/ProjectPortfolio';
import { getMembers } from '../../api/index';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

interface IProps {
  owner: boolean;
}

const MemberProfile: FC<IProps> = ({ owner }) => {
  const { isLoading, error, data } = useQuery(['members'], getMembers);
  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка</div>;

  return (
    <Section>
      <Container>
        <BackgroundImg src="#" />

        <Info>
          <Link to="photo">
            <Avatar src="#" />
          </Link>

          <Member>
            <MemberWrapper>
              <MemberName>Иван Иванов</MemberName>
              <MemberStar>
                <StarIcon />
              </MemberStar>
            </MemberWrapper>

            <MemberUserName>@iv.iv</MemberUserName>
          </Member>

          {owner && (
            <InfoChange>
              <Link to="edit">Изменить данные</Link>
            </InfoChange>
          )}
        </Info>

        {owner && (
          <Rating>
            <RatingPoints>
              <RatingPointsValue>123</RatingPointsValue>
              <RatingCaption>балла</RatingCaption>
            </RatingPoints>
            <RatingStar>
              <RatingStarList>
                <RatingStarItem>
                  <StarIcon />
                </RatingStarItem>
                <RatingStarItem>
                  <StarIcon />
                </RatingStarItem>
                <RatingStarItem>
                  <StarIcon />
                </RatingStarItem>
              </RatingStarList>

              <RatingCaption>ранг</RatingCaption>
            </RatingStar>

            <RatingInfo>Как повысить рейтинг?</RatingInfo>
          </Rating>
        )}

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

        <Skills>
          <SkillsItem>
            <SkillsDepartment>Backend</SkillsDepartment>

            <SkillsStackList>
              <SkillsStackItem>Python</SkillsStackItem>
              <SkillsStackItem>FastApi</SkillsStackItem>
              <SkillsStackItem>FastApi</SkillsStackItem>
              <SkillsStackItem>Python</SkillsStackItem>
              <SkillsStackItem>FastApi</SkillsStackItem>
            </SkillsStackList>
          </SkillsItem>

          <SkillsItem>
            <SkillsDepartment>Frontend</SkillsDepartment>

            <SkillsStackList>
              <SkillsStackItem>Python</SkillsStackItem>
              <SkillsStackItem>FastApi</SkillsStackItem>
              <SkillsStackItem>FastApi</SkillsStackItem>
              <SkillsStackItem>Python</SkillsStackItem>
              <SkillsStackItem>FastApi</SkillsStackItem>
            </SkillsStackList>
          </SkillsItem>
        </Skills>

        <Projects>
          <ProfileTitle>Проекты GoD</ProfileTitle>

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                spaceBetween: 22,
                slidesPerView: 3
              }
            }}
          >
            <SwiperSlide>
              <ProjectClosed />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectClosed />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectClosed />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectClosed />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectClosed />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectClosed />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectClosed />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectClosed />
            </SwiperSlide>
          </Swiper>
        </Projects>

        <Portfolio>
          <ProfileTitle>Портфолио</ProfileTitle>

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                spaceBetween: 26,
                slidesPerView: 2
              }
            }}
          >
            <SwiperSlide>
              <ProjectPortfolio />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectPortfolio />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectPortfolio />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectPortfolio />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectPortfolio />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectPortfolio />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectPortfolio />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectPortfolio />
            </SwiperSlide>
          </Swiper>
        </Portfolio>

        <HorizontalLine />

        <OtherMembers>
          <ProfileTitle>Другие гильдийцы</ProfileTitle>
          <Swiper
            breakpoints={{
              768: {
                spaceBetween: 24,
                slidesPerView: 2
              }
            }}
          >
            {data?.map((member: any) => (
              <SwiperSlide key={member.id}>
                <MemberItem member={member} />
              </SwiperSlide>
            ))}
          </Swiper>
        </OtherMembers>
      </Container>
    </Section>
  );
};

export default MemberProfile;
