import React, { FC } from 'react';
import Button from '../NavBarButton';
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
            <Button>Найти проект</Button>
          </NavBarLink>
          <NavBarLogo to="/">GoD</NavBarLogo>
          <NavBarLink wip="true" to="#">
            <Button>Войти</Button>
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
