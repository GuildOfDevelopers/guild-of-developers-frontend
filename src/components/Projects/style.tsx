import styled from 'styled-components';

export const Section = styled.section`
  background-color: var(--color-white);
`;

export const Wrapper = styled.div`
  padding-block: 105px;
`;

export const Title = styled.h2`
  margin-bottom: 40px;

  text-align: center;
  font-weight: var(--fw-700);
  font-size: var(--fs-600);
  line-height: var(--line-height-600);
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, min(377px, 100%));
  justify-content: center;
  align-items: center;
  gap: 34.5px;
`;

export const Card = styled.li`
  min-height: 374px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 24px;

  background-color: var(--color-white-2);
`;

export const CardTitle = styled.h3`
  color: var(--color-black);

  font-weight: var(--fw-600);
  font-size: var(--fs-500);
  line-height: var(--line-height-500);
`;

export const CardDate = styled.span`
  font-weight: var(--fw-400);
  font-size: var(--fs-300);
  line-height: var(--line-height-300);
  font-feature-settings: 'pnum' on, 'lnum' on;

  margin-block-end: 25px;
`;

export const CardDepartments = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-block: 21px 15px;

  position: relative;
`;

export const CardDepartment = styled.li`
  padding: 8px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  border: 2px solid var(--color-black);
  border-radius: 20px;

  font-weight: var(--fw-600);
  font-size: var(--fs-300);
  line-height: var(--line-height-300);

  transition: all 0.3s ease-in;

  &:hover {
    width: 100%;
    padding-block: 27px;
    border-radius: 15px;

    position: absolute;
    top: 0;
    left: 0;
    p {
    }

    font-weight: var(--fw-700);
    color: var(--color-white);
    background-color: var(--color-grey);
  }
`;

export const CardButton = styled.button`
  margin-block-start: auto;
  width: 179px;
  height: 42px;

  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-white);
  background-color: var(--color-grey);

  font-weight: var(--fw-700);
  font-size: var(--fs-500);
  line-height: var(--line-height-500);
  text-align: center;

  transition: transform 0.3s ease-out;

  &:hover,
  &:focus-visible {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1.05);
  }
`;
