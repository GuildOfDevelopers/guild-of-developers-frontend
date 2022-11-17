import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  background-color: var(--color-fon);
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
`;

export const NavBarLink = styled(Link)`
  position: relative;

  // TODO: Решить проблему с центрированеим лого
  /* min-width: 130px; */
  color: var(--color-white);
  font-size: var(--fs-350);
  font-weight: var(--fw-400);
  line-height: var(--line-height-350);
  text-align: center;

  &:first-child {
    text-align: start;
  }

  &:last-child {
    text-align: end;
  }

  transition: transform 0.3s ease-out;

  &:hover,
  &:focus-visible {
    font-weight: var(--fw-500);
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1.05);
  }

  // TODO: временно - только для еще не готовых ссылок
  ${({ wip }: { wip?: string }) => {
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

export const LogoDiv = styled.div``;

export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  z-index: 1;
`;

export const RightDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const NavBarLogo = styled(Link)``;
