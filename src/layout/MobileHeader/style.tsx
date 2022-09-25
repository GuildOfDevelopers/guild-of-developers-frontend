import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  background-color: var(--color-white-2);
  padding: 34px 16px;
`;

export const MenuHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Navbar = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 37px;
  transition: all 0.3s linear;
`;

export const NavBarLink = styled(Link)`
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
  ${({ workInProgress }: { workInProgress: boolean }) => {
    return (
      workInProgress &&
      css`
        &:hover,
        &:focus-visible {
          &::after {
            content: 'work in progress';

            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            min-width: 130px;
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
  &::after {
    content: '';
    position: absolute;
    width: 16px;
    border-bottom: 1.5px solid var(--color-black);
    border-radius: 50px;
    background-color: var(--color-black);
    bottom: 0;
    left: 23px;
  }
`;
