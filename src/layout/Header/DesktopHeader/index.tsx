import React, { FC } from 'react';
import Button from '../NavBarButton';
import { Container } from '../../../lib/styled/container';
import { NavBarLink, NavBarLogo, StyledHeader, Navbar } from './style';

const DesktopHeader: FC = () => {
  return (
    <StyledHeader>
      <Container>
        <Navbar>
          <NavBarLink workInProgress={true} to="#">
            Как это устроено?
          </NavBarLink>
          <NavBarLink workInProgress={true} to="#">
            О Гильдии
          </NavBarLink>
          <NavBarLink workInProgress={false} to="/currentProjects">
            <Button>Найти проект</Button>
          </NavBarLink>
          <NavBarLogo to="/">GoD</NavBarLogo>
          <NavBarLink workInProgress={true} to="#">
            <Button>Войти</Button>
          </NavBarLink>
          <NavBarLink workInProgress={true} to="#">
            Архив проектов
          </NavBarLink>
          <NavBarLink workInProgress={true} to="#">
            Гильдийцы
          </NavBarLink>
        </Navbar>
      </Container>
    </StyledHeader>
  );
};

export default DesktopHeader;
