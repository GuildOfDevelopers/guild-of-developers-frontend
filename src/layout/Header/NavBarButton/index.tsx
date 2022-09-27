import { FC } from 'react';
import { StyledButton } from './style';

interface ButtonProps {
  children: string;
}

const NavBarButton: FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default NavBarButton;
