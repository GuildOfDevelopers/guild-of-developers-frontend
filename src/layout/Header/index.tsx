import React, { FC } from 'react';
import Button from '../../components/Button';
import { Container } from '../../lib/styled/container';
import {
  NavBarLink,
  NavBarLogo,
  StyledHeader,
  StyledNavbarContainer,
  StyledNavLinkContainer
} from './style';

const Header: FC = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledNavbarContainer>
          <StyledNavLinkContainer>
            <NavBarLink to="#">Как это устроено?</NavBarLink>
            <NavBarLink to="/about">О Гильдии</NavBarLink>
            <NavBarLink to="/currentProjects">
              <Button>Найти проект</Button>
            </NavBarLink>
            <NavBarLogo>GoD</NavBarLogo>
            <NavBarLink to="/login">
              <Button>Войти</Button>
            </NavBarLink>
            <NavBarLink to="/doneProjects">Архив проектов</NavBarLink>
            <NavBarLink to="#">Гильдийцы</NavBarLink>
          </StyledNavLinkContainer>
        </StyledNavbarContainer>
      </Container>
    </StyledHeader>
  );
};

export default Header;
