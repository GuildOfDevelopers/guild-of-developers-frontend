import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';

export const StyledHeader = styled.header`
  background-color: var(--color-white-2);
`;

export const Navbar = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
`;

export const NavBarLink = styled(Link)`
  position: relative;

  // TODO: Решить проблему с центрированеим лого
  /* min-width: 130px; */

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

export const LogoDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 0;
`;

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

export const NavBarLogo = styled(Link)`
  font-size: var(--fs-700);
  font-weight: var(--fw-700);
  line-height: var(--line-height-700);
  position: relative;
  ${() => {
    const location = useLocation();
    return (
      location.pathname === '/' &&
      css`
        &::after {
          content: '';
          position: absolute;
          width: 16px;
          border-bottom: 1.5px solid var(--color-black);
          border-radius: 50px;
          background-color: var(--color-black);
          bottom: 0;
          left: 28px;
        }
      `
    );
  }}
`;
