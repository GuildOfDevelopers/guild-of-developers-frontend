import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 32px;
  padding-bottom: 64px;
  background-color: var(--color-white);

  @media (min-width: 768px) {
    padding-top: 105px;
    padding-bottom: 128px;
  }
`;

export const BackgroundImg = styled.img`
  display: block;
  width: 100%;
  height: 122px;
  position: 50%;
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

  @media (min-width: 768px) {
    margin-top: -35px;
    padding-left: 102px;
    padding-right: 102px;
    flex-direction: row;
    gap: 35px;
  }
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: var(--color-grey-3);
  position: 50%;
  object-fit: cover;
  overflow: hidden;

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

export const Descr = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 90px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 66px;
  }
`;

export const DescrText = styled.p`
  padding: 32px;
  max-width: 554px;
  border: 2px solid var(--color-black);
  border-radius: 20px;
  font-size: var(--fs-550);
  font-weight: var(--fw-400);
  line-height: var(--line-height-550);
`;

export const DescrList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const DescrItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const DescrItemText = styled.p`
  font-size: var(--fs-570);
  font-weight: var(--fw-700);
  line-height: var(--line-height-550);
`;

export const DescrItemLink = styled.a`
  font-size: var(--fs-570);
  font-weight: var(--fw-700);
  line-height: var(--line-height-550);
`;
