import styled, { css } from 'styled-components';

export const Card = styled.li`
  min-height: 374px;
  padding: 24px;

  border-radius: 20px;

  display: flex;
  flex-direction: column;

  background-color: var(--color-white-2);

  transition: all 0.3s;
`;

export const CardDate = styled.span`
  margin-block-end: 25px;

  font-weight: var(--fw-400);
  font-size: var(--fs-300);
  line-height: var(--line-height-300);
  font-feature-settings: 'pnum' on, 'lnum' on;
`;

export const CardTitle = styled.h3`
  font-weight: var(--fw-600);
  font-size: var(--fs-500);
  line-height: var(--line-height-500);

  color: var(--color-black);
`;

export const CardDepartments = styled.ul`
  margin-block: 21px 15px;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const CardDepartment = styled.li`
  padding: 8px 13px 8px 20px;
  width: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 2px solid var(--color-black);
  border-radius: 20px;

  font-weight: var(--fw-600);
  font-size: var(--fs-300);
  line-height: var(--line-height-300);

  cursor: pointer;

  transition: all 0.3s;

  p {
    display: flex;
    align-items: center;
  }

  &:hover,
  &:focus-visible {
    font-weight: var(--fw-700);
    color: var(--color-white);
    background-color: var(--color-grey);

    p {
      svg {
        path {
          fill: var(--color-white);
        }
      }
    }
  }

  ${({ toggle, dep }: { toggle: string; dep: string }) => {
    return (
      toggle === dep &&
      css`
        gap: 8px;
        font-weight: var(--fw-700);
        color: var(--color-white);
        background-color: var(--color-grey);
        padding: 22px 8px;
        border-radius: 15px;
        width: 100%;

        p {
          svg {
            path {
              fill: var(--color-white);
            }
          }
        }
      `
    );
  }}
`;

export const Stack = styled.ul`
  list-style: disc;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;

  gap: 3ch;
`;

export const Test = styled.li`
  &:first-of-type {
    list-style: none;
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

  font-weight: var(--fw-700);
  font-size: var(--fs-500);
  line-height: var(--line-height-500);
  text-align: center;

  color: var(--color-white);
  background-color: var(--color-grey);

  transition: transform 0.3s ease-out;

  &:hover,
  &:focus-visible {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1.05);
  }
`;
