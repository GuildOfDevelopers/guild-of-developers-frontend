import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: var(--color-white-2);
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
`;

export const NavBarLink = styled(Link)`
  min-width: 130px;

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
    left: 28px;
  }
`;
