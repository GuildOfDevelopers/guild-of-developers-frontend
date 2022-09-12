import React, { FC } from 'react';
import { Container } from '../../lib/styled/container';
import { StyledFooter } from './style';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Container>
        <p>Footer</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
