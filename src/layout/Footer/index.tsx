import React, { FC } from 'react';
import { Container } from '../../lib/styled/container';
import { Telegram, VK } from './Icon';
import {
  FooterA,
  FooterContent,
  FooterDiv,
  FooterLink,
  FooterText,
  Logo,
  StyledFooter
} from './style';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <FooterDiv>
            <FooterLink to={'#'}>Политика конфиденциальности</FooterLink>
            <FooterText>@2022, Guild of Developers</FooterText>
          </FooterDiv>
          <Logo>GoD</Logo>
          <FooterDiv>
            <FooterA href="mailto:guild.of.developers@gmail.com">
              guild.of.developers@gmail.com
            </FooterA>
            <FooterA href="#">
              <Telegram />
            </FooterA>
            <FooterA href="#">
              <VK />
            </FooterA>
          </FooterDiv>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
