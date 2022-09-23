import styled from 'styled-components';

export const Section = styled.section`
  background-color: var(--color-grey-2);
`;

export const Wrapper = styled.div`
  padding: 145px 104px 40px;
`;

export const Greetings = styled.div`
  margin: 0 0 145px auto;
  max-width: 381px;
`;

export const Title = styled.h1`
  margin: 0 0 13px;
  font-size: var(--fs-600);
  font-weight: var(--fw-700);
  line-height: var(--line-height-600);
  color: var(--color-black);
`;

export const Descr = styled.p`
  padding-right: 50px;
  max-width: 281px;
  font-size: var(--fs-400);
  font-weight: var(--fw-400);
  line-height: var(--line-height-400);
  color: var(--color-black);
`;

export const DescrSpan = styled.span`
  font-weight: var(--fw-700);
`;

export const Members = styled.ul`
  max-width: 792px;
  margin: 0 auto;
  padding: 30px 70px;
  background-color: var(--color-white-2);
  border-radius: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const MembersItem = styled.li`
  display: flex;
  align-items: center;
  gap: 26px;
`;

export const MembersIcon = styled.div`
  width: 69px;
  height: 69px;
  background-color: var(--color-grey-3);
  border-radius: 50%;
`;

export const MembersDescr = styled.div`
  width: 100px;
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
