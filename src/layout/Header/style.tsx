import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: var(--color-white-2);
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const NavBarLink = styled(Link)`
  font-size: var(--fs-400);
`;

export const NavBarLogo = styled.p`
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
