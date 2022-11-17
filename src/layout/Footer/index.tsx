import React, { FC } from 'react';
import { Container } from '../../lib/styled/container';
import { Telegram, VK, LogoIcon } from './Icon';
import {
  FooterA,
  Wrapper,
  Social,
  FooterLink,
  FooterText,
  Logo,
  StyledFooter,
  IconDiv,
  SocialLink
} from './style';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <Logo>
            <LogoIcon />
          </Logo>

          <Social>
            <FooterLink to={'#'}>Политика конфиденциальности</FooterLink>
            <FooterText>@2022, Guild of Developers</FooterText>
          </Social>

          <Social>
            <FooterA href="mailto:guild.of.developers@gmail.com">
              guild.of.developers@gmail.com
            </FooterA>
            <IconDiv>
              <SocialLink href="#">
                <Telegram />
              </SocialLink>
              <SocialLink href="#">
                <VK />
              </SocialLink>
            </IconDiv>
          </Social>
        </Wrapper>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
