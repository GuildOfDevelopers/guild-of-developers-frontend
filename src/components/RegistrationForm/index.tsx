import React, { FC } from 'react';
import { Container } from '../../lib/styled/container';
import {
  Section,
  Title,
  RegForm,
  Fildset,
  NextButton,
  Label,
  LabelText,
  InputText,
  Textarea,
  InputPassword
} from './style';

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

          <Fildset>
            <Label>
              <LabelText>GitHub/GitLab/Behance</LabelText>
              <InputText name="git" placeholder="Укажите ссылку" />
            </Label>

            <Label>
              <LabelText>Ссылка на портфолио</LabelText>
              <InputText name="portfolio" placeholder="Укажите ссылку" />
            </Label>
          </Fildset>

          <Fildset>
            <Label fill>
              <LabelText>О себе</LabelText>
              <Textarea name="text" placeholder="Начните вводить...."></Textarea>
            </Label>
          </Fildset>

          <Fildset>
            <Label>
              <LabelText>Пароль*</LabelText>
              {/* <InputPassword name="pass" placeholder="Введите" /> */}
            </Label>
          </Fildset>

          <NextButton>Далее</NextButton>
        </RegForm>
      </Container>
    </Section>
  );
};

export default RegistrationForm;
