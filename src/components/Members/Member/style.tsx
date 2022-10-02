import styled, { css } from 'styled-components';

export const Card = styled.li`
  padding: 25px;
  border-radius: 20px;

  display: flex;
  flex-wrap: wrap;
  gap: 25px;

  background-color: var(--color-white-2);
`;

// ASIDE
export const AsideContent = styled.div``;
export const Photo = styled.div`
  width: 98px;
  aspect-ratio: 1/1;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100%;
  border: 4px solid var(--color-black);
  background-color: var(--color-white);

  svg {
    path {
      fill: var(--color-grey-2);
    }
  }
`;

// MAIN
export const MainContent = styled.div``;

// MAIN - 1
export const MemberInfo = styled.div`
  padding-block: 0 25px;
  border-bottom: 1px solid var(--color-black);

  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const Name = styled.h3`
  display: flex;
  align-items: center;

  font-size: var(--fs-500);
  font-weight: var(--fw-700);
  line-height: var(--line-height-500);

  svg {
    margin-left: 9px;
  }
`;
export const NickName = styled.span`
  font-size: var(--fs-350);
  font-weight: var(--fw-400);
  line-height: var(--line-height-350);
`;

// MAIN - 2
export const MemberStack = styled.div`
  padding-block: 25px;
  border-bottom: 1px solid var(--color-black);

  display: flex;
  flex-direction: column;
  gap: 13px;

  h4 {
    font-size: var(--fs-350);
    font-weight: var(--fw-700);
    line-height: var(--line-height-350);
  }
`;

export const Department = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Stack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Item = styled.li`
  padding: 6px 20px;
  width: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 2px solid var(--color-black);
  border-radius: 20px;

  font-weight: var(--fw-600);
  font-size: var(--fs-250);
  line-height: var(--line-height-250);

  /* cursor: pointer;

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
  } */
`;

// MAIN - 3
export const MemberProjects = styled.div`
  padding-block: 25px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ProjectsCount = styled.div`
  align-self: flex-start;

  display: flex;
  flex-direction: column;
  gap: 10px;

  font-weight: var(--fw-400);
  font-size: var(--fs-350);
  line-height: var(--line-height-350);

  span {
    font-weight: var(--fw-600);
    font-size: var(--fs-250);
    line-height: var(--line-height-250);
    font-feature-settings: 'pnum' on, 'lnum' on;
  }
`;
export const TimeInGuild = styled.div`
  align-self: flex-start;

  display: flex;
  flex-direction: column;
  gap: 10px;

  font-weight: var(--fw-400);
  font-size: var(--fs-350);
  line-height: var(--line-height-350);

  span {
    font-weight: var(--fw-600);
    font-size: var(--fs-250);
    line-height: var(--line-height-250);
    font-feature-settings: 'pnum' on, 'lnum' on;
  }
`;
export const MoreInfo = styled.div`
  position: relative;

  cursor: pointer;

  font-weight: var(--fw-300);
  font-size: var(--fs-300);
  line-height: var(--line-height-300);

  // TODO: временно - только для еще не готовых ссылок
  ${({ wip }: { wip: string }) => {
    return (
      wip === 'true' &&
      css`
        &:hover,
        &:focus-visible {
          &::after {
            content: 'Скоро';

            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            /* min-width: 130px; */
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 25px;
            background-color: var(--color-grey-2);
            color: var(--color-black);
            font-size: var(--fs-350);
            font-weight: var(--fw-700);
            line-height: var(--line-height-350);
            text-align: center;
          }
        }
      `
    );
  }}
`;
