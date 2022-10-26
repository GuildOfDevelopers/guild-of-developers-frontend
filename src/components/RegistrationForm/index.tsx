import React, { FC } from 'react';
import { Container } from '../../lib/styled/container';
import { Section, Title, RegForm, Fildset, NextButton, Label, LabelText, InputText } from './style';

const RegistrationForm: FC = () => {
  return (
    <Section>
      <Container>
        <Title>Регистрация нового пользователя</Title>

        <RegForm>
          <Fildset>
            <Label>
              <LabelText>Имя*</LabelText>
              <InputText name="name" placeholder="Введите" />
            </Label>

            <Label>
              <LabelText>Фамилия*</LabelText>
              <InputText name="lastname" placeholder="Введите" />
            </Label>

            <Label>
              <LabelText>Никнейм*</LabelText>
              <InputText name="nickname" placeholder="Введите" />
            </Label>

            <Label>
              <LabelText>Город проживания*</LabelText>
              <InputText name="city" placeholder="Введите" />
            </Label>

            <Label>
              <LabelText>Telegram*</LabelText>
              <InputText name="telegram" placeholder="Введите через @" />
            </Label>

            <Label>
              <LabelText>Email*</LabelText>
              <InputText name="email" placeholder="Введите" />
            </Label>
          </Fildset>

          <Fildset>dfddfd</Fildset>

          <Fildset>dfddfd</Fildset>

          <Fildset>dfddfd</Fildset>

          <NextButton>Далее</NextButton>
        </RegForm>
      </Container>
    </Section>
  );
};

export default RegistrationForm;
