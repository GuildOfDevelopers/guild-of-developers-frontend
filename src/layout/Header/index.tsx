import React, { FC } from 'react';
import { Container } from '../../lib/styled/container';
import { StyledHeader } from './style';

const Header: FC = () => {
  return (
    <StyledHeader>
      <Container>
        <p>Header</p>
      </Container>
    </StyledHeader>
  );
};

export default Header;
