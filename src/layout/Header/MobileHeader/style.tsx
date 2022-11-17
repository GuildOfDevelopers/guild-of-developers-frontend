import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';

export const StyledHeader = styled.header`
  background-color: var(--color-fon);
  padding-block: 16px;
`;

export const MenuHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Navbar = styled(motion.nav)`
  position: absolute;
  top: 79px;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding-top: 37px;
  padding-bottom: 200px;
  background-color: var(--color-fon);
  transition: max-height 0.1s ease-out;
  z-index: 100;
`;

export const NavBarLink = styled(Link)`
  font-size: var(--fs-350);
  font-weight: var(--fw-400);
  line-height: var(--line-height-350);
  text-align: center;
  color: var(--color-white);

  &:first-child {
    text-align: start;
  }

  &:nth-child(2) {
    margin-bottom: 32px;
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
        @media (min-width: 1024px) {
          &::after {
            left: 23px;
          }
        }
        @media (max-width: 767px) {
          &::after {
            left: 23px;
          }
        }
      `
    );
  }}
`;
