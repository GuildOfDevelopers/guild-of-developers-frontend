import React, { FC } from 'react';
import NavBarButton from '../NavBarButton';
import { Container } from '../../../lib/styled/container';
import { NavBarLink, NavBarLogo, StyledHeader, Navbar, LogoDiv, LeftDiv, RightDiv } from './style';

const DesktopHeader: FC = () => {
  return (
    <StyledHeader>
      <Container>
        <Navbar>
          <LeftDiv>
            <NavBarLink wip="true" to="#">
              Как это устроено?
            </NavBarLink>
            <NavBarLink wip="true" to="">
              О Гильдии
            </NavBarLink>
            <NavBarLink wip="false" to="/currentProjects">
              <NavBarButton>Найти проект</NavBarButton>
            </NavBarLink>
          </LeftDiv>
          <LogoDiv>
            <NavBarLogo to="/">GoD</NavBarLogo>
          </LogoDiv>
          <RightDiv>
            <NavBarLink wip="false" to="/login">
              <NavBarButton>Войти</NavBarButton>
            </NavBarLink>
            <NavBarLink wip="true" to="#">
              Архив проектов
            </NavBarLink>
            <NavBarLink wip="false" to="/guildMembers">
              Гильдийцы
            </NavBarLink>
          </RightDiv>
        </Navbar>
      </Container>
    </StyledHeader>
  );
};

export default DesktopHeader;
