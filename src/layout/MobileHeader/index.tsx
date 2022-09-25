import React, { FC, useState } from 'react';
import MenuToggle from '../../components/MenuToggle';
import Button from '../../components/NavBarButton';
import { Container } from '../../lib/styled/container';
import { NavBarLink, NavBarLogo, StyledHeader, Navbar } from './style';

const MobileHeader: FC = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <StyledHeader>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      <Container>
        {isOpen && (
          <Navbar>
            {/* <NavBarLink to="/howItWorks">Как это устроено?</NavBarLink> */}
            <NavBarLink workInProgress={true} to="#">
              Как это устроено?
            </NavBarLink>
            {/* <NavBarLink to="/aboutGuild">О Гильдии</NavBarLink> */}
            <NavBarLink workInProgress={true} to="#">
              О Гильдии
            </NavBarLink>
            <NavBarLink workInProgress={false} to="/currentProjects">
              <Button>Найти проект</Button>
            </NavBarLink>
            <NavBarLogo to="/">GoD</NavBarLogo>
            {/* <NavBarLink to="/login"> */}
            <NavBarLink workInProgress={true} to="#">
              <Button>Войти</Button>
            </NavBarLink>
            {/* <NavBarLink to="/doneProjects">Архив проектов</NavBarLink> */}
            <NavBarLink workInProgress={true} to="#">
              Архив проектов
            </NavBarLink>
            {/* <NavBarLink to="/guildMembers">Гильдийцы</NavBarLink> */}
            <NavBarLink workInProgress={true} to="#">
              Гильдийцы
            </NavBarLink>
          </Navbar>
        )}
      </Container>
    </StyledHeader>
  );
};

export default MobileHeader;
