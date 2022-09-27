import React, { FC } from 'react';
import NavBarButton from '../NavBarButton';
import { Container } from '../../../lib/styled/container';
import { NavBarLink, NavBarLogo, StyledHeader, Navbar } from './style';

const DesktopHeader: FC = () => {
  return (
    <StyledHeader>
      <Container>
        <Navbar>
          <NavBarLink wip="true" to="#">
            Как это устроено?
          </NavBarLink>
          <NavBarLink wip="true" to="#">
            О Гильдии
          </NavBarLink>
          <NavBarLink wip="false" to="/currentProjects">
            <NavBarButton>Найти проект</NavBarButton>
          </NavBarLink>
          <NavBarLogo to="/">GoD</NavBarLogo>
          <NavBarLink wip="true" to="#">
            <NavBarButton>Войти</NavBarButton>
          </NavBarLink>
          <NavBarLink wip="true" to="#">
            Архив проектов
          </NavBarLink>
          <NavBarLink wip="true" to="#">
            Гильдийцы
          </NavBarLink>
        </Navbar>
      </Container>
    </StyledHeader>
  );
};

export default DesktopHeader;
