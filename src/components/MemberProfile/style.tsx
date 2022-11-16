import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 32px;
  padding-bottom: 64px;
  background-color: var(--color-white);

  @media (min-width: 768px) {
    padding-top: 105px;
    padding-bottom: 128px;
  }

  .swiper {
    padding-bottom: 75px;
  }

  .swiper-slide {
    height: auto;
  }

  .swiper-pagination-bullet {
    width: 21px;
    height: 21px;
    background-color: var(--color-grey);
  }

  .swiper-pagination-bullets.swiper-pagination-horizontal .swiper-pagination-bullet {
    margin: 0 5px;
  }
`;

export const BackgroundImg = styled.img`
  display: block;
  width: 100%;
  height: 122px;
  object-fit: cover;
  border-radius: 5px;
  background-color: var(--color-grey-4);
  overflow: hidden;

  @media (min-width: 768px) {
    height: 344px;
    border-radius: 30px;
  }
`;

export const Info = styled.div`
  margin-top: -30px;
  margin-bottom: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: relative;

  @media (min-width: 768px) {
    margin-top: -35px;
    padding-left: 102px;
    padding-right: 102px;
    flex-direction: row;
    gap: 35px;
  }
`;

export const InfoChange = styled.button`
  width: 100%;
  padding: 18px;

  text-align: center;
  background-color: var(--color-grey);
  border-radius: 25px;
  color: var(--color-white);
  font-size: var(--fs-550);
  font-weight: var(--fw-700);
  line-height: var(--line-height-550);

  @media (min-width: 768px) {
    width: 280px;
    position: absolute;
    right: 102px;
    bottom: 0;
  }

  @media (min-width: 1190px) {
    bottom: unset;
  }
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: var(--color-grey-3);
  object-fit: cover;
  overflow: hidden;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 204px;
    height: 204px;
  }
`;

export const Member = styled.div``;

export const MemberWrapper = styled.div`
  margin-bottom: 13px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const MemberName = styled.p`
  color: var(--color-black);
  font-size: var(--fs-550);
  font-weight: var(--fw-700);
  line-height: var(--line-height-550);

  @media (min-width: 768px) {
    font-size: var(--fs-700);
    line-height: var(--line-height-700);
  }
`;

export const MemberStar = styled.div`
  width: 16px;
  height: 16px;

  & svg {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;

export const MemberUserName = styled.p`
  color: var(--color-black);
  font-size: var(--fs-400);
  font-weight: var(--fw-400);
  line-height: var(--line-height-500);
  text-align: center;

  @media (min-width: 768px) {
    text-align: unset;
    line-height: var(--line-height-550);
  }
`;

export const Rating = styled.div`
  width: 100%;
  max-width: 996px;
  margin: 0 auto 128px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  background-color: var(--color-grey-3);
  border-radius: 20px;

  @media (min-width: 768px) {
    padding: 58px 106px;
    flex-direction: row;
  }
`;

export const RatingPoints = styled.div``;
export const RatingPointsValue = styled.p`
  margin-bottom: 10px;
  color: var(--color-black);
  font-size: var(--fs-800);
  font-weight: var(--fw-700);
  line-height: var(--line-height-700);
`;

export const RatingStar = styled.div``;

export const RatingStarList = styled.ul`
  margin-bottom: 12px;
  display: flex;
  gap: 10px;
`;

export const RatingStarItem = styled.li`
  width: 40px;
  height: 40px;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const RatingCaption = styled.p`
  font-size: var(--fs-400);
  font-weight: var(--fw-400);
  line-height: var(--line-height-400);
  color: var(--color-black);
  text-align: center;
`;

export const RatingInfo = styled.button`
  width: 100%;
  padding: 9px 18px;

  text-align: center;
  background-color: var(--color-grey);
  border-radius: 25px;
  color: var(--color-white);
  font-size: var(--fs-550);
  font-weight: var(--fw-700);
  line-height: var(--line-height-550);

  @media (min-width: 768px) {
    width: 280px;
  }
`;

export const Descr = styled.div`
  margin-bottom: 88px;
  display: flex;
  flex-wrap: wrap;
  gap: 90px;

  @media (min-width: 768px) {
    margin-bottom: 128px;
    padding-left: 102px;
    padding-right: 102px;
    flex-wrap: nowrap;
    gap: 66px;
  }
`;

export const DescrText = styled.p`
  padding: 32px;
  max-width: 554px;
  border: 2px solid var(--color-black);
  border-radius: 20px;
  font-size: var(--fs-400);
  font-weight: var(--fw-400);
  line-height: var(--line-height-400);

  @media (min-width: 768px) {
    font-size: var(--fs-550);
    line-height: var(--line-height-550);
  }
`;

export const DescrList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-shrink: 0;
  flex-grow: 0;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const DescrItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;

  svg {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 768px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

export const DescrItemText = styled.p`
  font-size: var(--fs-450);
  font-weight: var(--fw-700);
  line-height: var(--line-height-400);

  @media (min-width: 768px) {
    font-size: var(--fs-570);
    line-height: var(--line-height-550);
  }
`;

export const DescrItemLink = styled.a`
  font-size: var(--fs-450);
  font-weight: var(--fw-700);
  line-height: var(--line-height-400);

  @media (min-width: 768px) {
    font-size: var(--fs-570);
    line-height: var(--line-height-550);
  }
`;

export const Skills = styled.ul`
  padding: 20px;
  margin-bottom: 128px;
  border-radius: 30px;
  background-color: var(--color-grey-4);

  @media (min-width: 768px) {
    padding: 64px 100px;
  }
`;

export const SkillsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;

  &:not(:last-child) {
    margin-bottom: 64px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const SkillsDepartment = styled.div`
  width: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 36px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-black);
  border-radius: 20px;
  color: var(--color-white);
  font-weight: var(--fw-700);
  font-size: var(--fs-550);
  line-height: var(--line-height-550);
  overflow: hidden;

  @media (min-width: 768px) {
    width: 310px;
  }
`;

export const SkillsStackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const SkillsStackItem = styled.li`
  width: 100%;
  padding: 12px;
  text-align: center;
  flex-grow: 0;
  flex-shrink: 0;
  border: 2px solid var(--color-black);
  border-radius: 20px;
  align-self: flex-start;
  font-weight: var(--fw-700);
  font-size: var(--fs-550);
  line-height: var(--line-height-550);

  @media (min-width: 768px) {
    width: 202px;
  }
`;

export const ProfileTitle = styled.h2`
  margin-bottom: 64px;
  font-size: var(--fs-700);
  font-weight: var(--fw-700);
  line-height: var(--line-height-700);
  color: var(--color-black);
  text-align: center;
`;

export const Projects = styled.div`
  margin-bottom: 118px;
`;

export const Portfolio = styled.div`
  margin-bottom: 118px;
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  height: 4px;
  margin-bottom: 128px;
  background-color: var(--color-grey-5);
`;

export const OtherMembers = styled.div`
  .swiper {
    padding-bottom: 0;
  }
`;
