import React, { FC } from 'react';
import { useMediaQuery } from '../../services/hooks';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

const Header: FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return <>{isDesktop ? <DesktopHeader /> : <MobileHeader />}</>;
};

export default Header;
