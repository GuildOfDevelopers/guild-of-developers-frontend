import React, { FC } from 'react';
import { Container } from '../../lib/styled/container';
import { Telegram, VK } from './Icon';
import { FooterA, Wrapper, Social, FooterLink, FooterText, Logo, StyledFooter } from './style';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <Social>
            <FooterLink to={'#'}>Политика конфиденциальности</FooterLink>
            <FooterText>@2022, Guild of Developers</FooterText>
          </Social>
          <Logo>GoD</Logo>
          <Social>
            <FooterA href="mailto:guild.of.developers@gmail.com">
              guild.of.developers@gmail.com
            </FooterA>
            <FooterA href="#">
              <Telegram />
            </FooterA>
            <FooterA href="#">
              <VK />
            </FooterA>
          </Social>
        </Wrapper>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
