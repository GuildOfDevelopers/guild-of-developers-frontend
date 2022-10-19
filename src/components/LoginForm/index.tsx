import React, { FC } from 'react';
import TelegramLoginButton from 'react-telegram-login';
import { Container } from '../../lib/styled/container';
import { Section, Wrapper } from './style';

// Example POST method implementation:
async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
}

const LoginForm: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTelegramResponse = (response: {
    auth_date: number;
    first_name: string;
    hash: string;
    id: number;
    photo_url: string;
    username: string;
  }) =>
    postData('https://guild-of-developers.ru/login/telegram', response).then((data) =>
      console.log(data)
    );

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
