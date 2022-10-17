import React, { FC } from 'react';
import TelegramLoginButton from 'react-telegram-login';
import { Container } from '../../lib/styled/container';
import { Section, Wrapper } from './style';

const LoginForm: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTelegramResponse = (response: any) => {
    console.log(response);
  };

  return (
    <Section>
      <Container>
        <Wrapper>
          <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="GoDAuthBot" />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default LoginForm;
