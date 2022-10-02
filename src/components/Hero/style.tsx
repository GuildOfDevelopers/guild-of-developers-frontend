import styled from 'styled-components';

export const Section = styled.section`
  background-color: var(--color-grey-2);
`;

export const Wrapper = styled.div`
  padding: 56px 0;

  @media (min-width: 768px) {
    padding: 145px 104px 40px;
  }
`;

export const Greetings = styled.div`
  margin: 0 auto 56px;
  max-width: 182px;
  text-align: center;

  @media (min-width: 768px) {
    margin: 0 0 145px auto;
    max-width: 381px;
    text-align: left;
  }
`;

export const Title = styled.h1`
  margin: 0 0 20px;
  font-size: var(--fs-600);
  font-weight: var(--fw-700);
  line-height: var(--line-height-600);
  color: var(--color-black);
`;

export const Descr = styled.p`
  max-width: 281px;
  font-size: var(--fs-400);
  font-weight: var(--fw-400);
  line-height: var(--line-height-400);
  color: var(--color-black);

  @media (min-width: 768px) {
    padding-right: 50px;
  }
`;

export const DescrSpan = styled.span`
  display: block;
  font-weight: var(--fw-700);
`;

export const Members = styled.ul`
  max-width: 288px;
  margin: 0 auto;
  padding: 40px 22px;
  background-color: var(--color-white-2);
  border-radius: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 792px;
    padding: 30px 70px;
    gap: 26px;
  }
`;

export const MembersItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  align-items: center;
  width: 72px;

  @media (min-width: 768px) {
    width: auto;
    gap: 26px;
  }
`;

export const MembersIcon = styled.div`
  width: 61px;
  height: 61px;
  background-color: var(--color-grey-3);
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 69px;
    height: 69px;
  }
`;

export const MembersDescr = styled.div`
  max-width: 100px;
  text-align: center;

  @media (min-width: 1017px) {
    text-align: left;
  }
`;

export const MembersAmount = styled.p`
  font-size: var(--fs-600);
  font-weight: var(--fw-700);
  line-height: var(--line-height-600);
  font-variant-numeric: lining-nums;
  font-feature-settings: 'lnum';
`;

export const MembersName = styled.p`
  font-size: var(--fs-400);
  font-weight: var(--fw-400);
  line-height: var(--line-height-400);
`;
