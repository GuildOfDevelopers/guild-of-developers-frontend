import React, { FC } from 'react';
import Button from '../../components/NavBarButton';
import { Container } from '../../lib/styled/container';
import { NavBarLink, NavBarLogo, StyledHeader, Navbar } from './style';

const Header: FC = () => {
  return (
    <StyledHeader>
      <Container>
        <Navbar>
          <NavBarLink to="/howItWorks">Как это устроено?</NavBarLink>
          <NavBarLink to="/aboutGuild">О Гильдии</NavBarLink>
          <NavBarLink to="/currentProjects">
            <Button>Найти проект</Button>
          </NavBarLink>
          <NavBarLogo to="/">GoD</NavBarLogo>
          <NavBarLink to="/login">
            <Button>Войти</Button>
          </NavBarLink>
          <NavBarLink to="/doneProjects">Архив проектов</NavBarLink>
          <NavBarLink to="/guildMembers">Гильдийцы</NavBarLink>
        </Navbar>
      </Container>
    </StyledHeader>
  );
};

export default Header;
