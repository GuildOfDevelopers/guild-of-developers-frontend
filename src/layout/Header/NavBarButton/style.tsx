import styled from 'styled-components';

export const StyledButton = styled.button`
  min-width: 160px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background: var(--gradient-1);
  color: var(--color-white);
  font-size: var(--fs-350);
  font-weight: var(--fw-700);
  line-height: var(--line-height-350);
  text-align: center;

  transition: transform 0.3s ease-out;

  &:hover,
  &:focus-visible {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1.05);
  }
`;
