import { AnimatePresence } from 'framer-motion';
import React, { FC, useState } from 'react';
import MenuToggle from '../MenuToggle';
import NavBarButton from '../NavBarButton';
import { Container } from '../../../lib/styled/container';
import { NavBarLink, NavBarLogo, StyledHeader, Navbar, MenuHeader } from './style';

const MobileHeader: FC = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <StyledHeader>
      <Container>
        <MenuHeader>
          <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
          <NavBarLogo to="/">GoD</NavBarLogo>
        </MenuHeader>
        <AnimatePresence>
          {isOpen && (
            <Navbar
              initial={{ maxHeight: 0, opacity: 0 }}
              animate={{ maxHeight: '274px', opacity: 1 }}
              exit={{ maxHeight: 0, opacity: 0 }}
            >
              <NavBarLink wip="true" to="#">
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
              <NavBarLink wip="true" to="#">
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
