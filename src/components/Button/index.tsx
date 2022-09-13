import { StyledButton } from './style';

interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
