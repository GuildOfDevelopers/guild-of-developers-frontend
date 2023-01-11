import { AnimatePresence } from 'framer-motion';
import React, { FC, useState } from 'react';
import MenuToggle from '../MenuToggle';
import NavBarButton from '../NavBarButton';
import { Container } from '../../../lib/styled/container';
import { NavBarLink, NavBarLogo, StyledHeader, Navbar, MenuHeader } from './style';
import { LogoIconMobile } from '../Icon';

const MobileHeader: FC = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <StyledHeader>
      <Container>
        <MenuHeader>
          <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
          <NavBarLogo to="/">
            <LogoIconMobile />
          </NavBarLogo>
        </MenuHeader>
        <AnimatePresence>
          {isOpen && (
            <Navbar
              initial={{ maxHeight: 0, opacity: 0 }}
              animate={{ maxHeight: 'calc(100% - 80px)', opacity: 1 }}
              exit={{ maxHeight: 0, opacity: 0 }}
            >
              <NavBarLink wip="false" to="/login">
                <NavBarButton>Войти</NavBarButton>
              </NavBarLink>
              <NavBarLink wip="false" to="/currentProjects">
                <NavBarButton>Найти проект</NavBarButton>
              </NavBarLink>
              <NavBarLink wip="true" to="#">
                Как это устроено?
              </NavBarLink>
              <NavBarLink wip="true" to="#">
                О Гильдии
              </NavBarLink>
              <NavBarLink wip="true" to="#">
                Архив проектов
              </NavBarLink>
              <NavBarLink wip="false" to="/guildMembers">
                Гильдийцы
              </NavBarLink>
            </Navbar>
          )}
        </AnimatePresence>
      </Container>
    </StyledHeader>
  );
};

export default MobileHeader;
