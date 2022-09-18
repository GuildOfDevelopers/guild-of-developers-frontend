import styled, { css } from 'styled-components';

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
  justify-content: center;
  align-items: flex-start;
  grid-template-columns: repeat(auto-fill, min(377px, 100%));

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
  font-weight: var(--fw-600);
  font-size: var(--fs-500);
  line-height: var(--line-height-500);

  color: var(--color-black);
`;

export const CardDate = styled.span`
  margin-block-end: 25px;

  font-weight: var(--fw-400);
  font-size: var(--fs-300);
  line-height: var(--line-height-300);
  font-feature-settings: 'pnum' on, 'lnum' on;
`;

export const CardDepartments = styled.ul`
  margin-block: 21px 15px;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  position: relative;
`;

export const CardDepartment = styled.li`
  padding: 8px 20px;
  width: max-content;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  border: 2px solid var(--color-black);
  border-radius: 20px;

  font-weight: var(--fw-600);
  font-size: var(--fs-300);
  line-height: var(--line-height-300);
  align-self: center;
  cursor: pointer;

  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus-visible {
    transform: scale(1.02);

    font-weight: var(--fw-700);
    color: var(--color-white);
    background-color: var(--color-grey);
  }

  &:active {
    transform: scale(1.05);
  }

  ${({ toggle, dep }: { toggle: string; dep: string }) => {
    return (
      toggle === dep &&
      css`
        width: 100%;
        border-radius: 15px;
        padding-block: 30px;

        font-weight: var(--fw-700);
        color: var(--color-white);
        background-color: var(--color-grey);
      `
    );
  }}
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
