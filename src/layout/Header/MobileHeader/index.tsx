import { AnimatePresence } from 'framer-motion';
import React, { FC, useState } from 'react';
import MenuToggle from '../MenuToggle';
import Button from '../NavBarButton';
import { Container } from '../../../lib/styled/container';
import { NavBarLink, NavBarLogo, StyledHeader, Navbar, MenuHeader } from './style';

const MobileHeader: FC = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <StyledHeader>
      <MenuHeader>
        <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
        <NavBarLogo to="/">GoD</NavBarLogo>
      </MenuHeader>
      <Container>
        <AnimatePresence>
          {isOpen && (
            <Navbar initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <NavBarLink wip="true" to="#">
                <Button>Войти</Button>
              </NavBarLink>
              <NavBarLink wip="false" to="/currentProjects">
                <Button>Найти проект</Button>
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
