import React, { FC } from 'react';
import Button from '../../components/NavBarButton';
import { Container } from '../../lib/styled/container';
import { useMediaQuery } from '../../services/hooks';
import { NavBarLink, NavBarLogo, StyledHeader, Navbar } from './style';
import MobileHeader from '../MobileHeader';

const Header: FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <>
      {isDesktop && (
        <StyledHeader>
          <Container>
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
          </Container>
        </StyledHeader>
      )}
      {!isDesktop && <MobileHeader />}
    </>
  );
};

export default Header;
