import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import TelegramLoginButton from 'react-telegram-login';
import { Container } from '../../lib/styled/container';
import { IconHide, IconVisible } from '../RegistrationForm/Icon';
import {
  ButtonEye,
  InputEmail,
  InputPassword,
  Label,
  LabelText,
  NextButton,
  RegForm,
  Section,
  Title,
  Wrapper
} from './style';

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
  const [visiblePassword, setVisiblePassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
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
          <Title>Вход в аккаунт</Title>
          <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="GoDAuthBot" />
          <RegForm>
            <Label>
              <LabelText>Email*</LabelText>
              <InputEmail
                value={email}
                placeholder="Введите"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Label>
            <Label>
              <LabelText>Пароль*</LabelText>

              <InputPassword
                value={password}
                type={visiblePassword ? 'text' : 'password'}
                placeholder="Введите"
                onChange={(e) => setPassword(e.target.value)}
              />

              <ButtonEye onClick={() => setVisiblePassword(!visiblePassword)}>
                {!visiblePassword && <IconHide />}
                {visiblePassword && <IconVisible />}
              </ButtonEye>
            </Label>
          </RegForm>
          <NextButton to="/" style={{ marginTop: '32px' }}>
            Войти
          </NextButton>
          <div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}
          >
            <span>Ты здесь впервые?</span>
            <span>
              <Link to="/registration" style={{ fontWeight: 'bold' }}>
                Зарегистрируйся
              </Link>{' '}
              или войди с помощью Telegram
            </span>
          </div>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default LoginForm;
