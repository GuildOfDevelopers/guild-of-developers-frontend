import React, { FC } from 'react';
import { Container } from '../../lib/styled/container';
import {
  Section,
  Title,
  RegForm,
  Fieldset,
  NextButton,
  Label,
  LabelText,
  InputText,
  Textarea,
  InputPassword,
  ButtonEye,
  TextPassword,
  MenuButton,
  MenuItems
} from './style';
import { Menu } from '@headlessui/react';
import DropdownList from '../DropdownList';
import { IconVisible, IconHide } from './Icon';
import { useRegistrationStore } from '../../zustand-store';

const RegistrationForm: FC = () => {
  const [visiblePassword, setVisiblePassword] = React.useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = React.useState(false);

  const {
    name,
    lastName,
    nickname,
    city,
    telegram,
    email,
    git,
    portfolio,
    text,
    password,
    confirmPassword,
    changeInput,
    checkedDepartments
  } = useRegistrationStore();

  return (
    <Section>
      <Container>
        <Title>Регистрация нового пользователя</Title>

        <RegForm>
          <Fieldset>
            <Label>
              <LabelText>Имя*</LabelText>
              <InputText
                value={name}
                placeholder="Введите"
                onChange={(e) => changeInput('name', e.target.value)}
              />
            </Label>

            <Label>
              <LabelText>Фамилия*</LabelText>
              <InputText
                value={lastName}
                placeholder="Введите"
                onChange={(e) => changeInput('lastName', e.target.value)}
              />
            </Label>

            <Label>
              <LabelText>Никнейм*</LabelText>
              <InputText
                value={nickname}
                placeholder="Введите"
                onChange={(e) => changeInput('nickname', e.target.value)}
              />
            </Label>

            <Label>
              <LabelText>Город проживания*</LabelText>
              <InputText
                value={city}
                placeholder="Введите"
                onChange={(e) => changeInput('city', e.target.value)}
              />
            </Label>

            <Label>
              <LabelText>Telegram*</LabelText>
              <InputText
                value={telegram}
                placeholder="Введите через @"
                onChange={(e) => changeInput('telegram', e.target.value)}
              />
            </Label>

            <Label>
              <LabelText>Email*</LabelText>
              <InputText
                value={email}
                placeholder="Введите"
                onChange={(e) => changeInput('email', e.target.value)}
              />
            </Label>
          </Fieldset>

          <Fieldset>
            <Label wfill>
              <LabelText>Направление (одно или несколько)</LabelText>
              <Menu>
                <MenuButton>
                  {checkedDepartments()
                    .map((item) => item.name)
                    .join(', ') || 'Выберете'}
                </MenuButton>

                <MenuItems>
                  <DropdownList page="registrationForm" type="checkbox" name="department" />
                </MenuItems>
              </Menu>
            </Label>

            {checkedDepartments().map((item, j) => (
              <Label key={j} wfill>
                <LabelText>{item.name} Стек (один или несколько)</LabelText>
                <Menu>
                  <MenuButton>
                    {item.stack
                      .filter((i) => i.isCheck)
                      .map((i) => i.name)
                      .join(', ') || 'Выберете'}
                  </MenuButton>

                  <MenuItems>
                    <DropdownList
                      page="registrationForm"
                      type="checkbox"
                      name="stack"
                      departmentName={item.name}
                    />
                  </MenuItems>
                </Menu>
              </Label>
            ))}

            <Label>
              <LabelText>GitHub/GitLab/Behance</LabelText>
              <InputText
                value={git}
                placeholder="Укажите ссылку"
                onChange={(e) => changeInput('git', e.target.value)}
              />
            </Label>

            <Label>
              <LabelText>Ссылка на портфолио</LabelText>
              <InputText
                value={portfolio}
                placeholder="Укажите ссылку"
                onChange={(e) => changeInput('portfolio', e.target.value)}
              />
            </Label>
          </Fieldset>

          <Fieldset>
            <Label>
              <LabelText>О себе</LabelText>
              <Textarea
                value={text}
                placeholder="Начните вводить...."
                onChange={(e) => changeInput('text', e.target.value)}
              ></Textarea>
            </Label>
          </Fieldset>

          <Fieldset>
            <Label>
              <LabelText>Пароль*</LabelText>

              <InputPassword
                value={password}
                type={visiblePassword ? 'text' : 'password'}
                placeholder="Введите"
                onChange={(e) => changeInput('password', e.target.value)}
              />

              <ButtonEye onClick={() => setVisiblePassword(!visiblePassword)}>
                {!visiblePassword && <IconHide />}
                {visiblePassword && <IconVisible />}
              </ButtonEye>
            </Label>

            <Label>
              <InputPassword
                value={confirmPassword}
                type={visibleConfirmPassword ? 'text' : 'password'}
                placeholder="Введите еще раз"
                onChange={(e) => changeInput('confirmPassword', e.target.value)}
              />

              <ButtonEye onClick={() => setVisibleConfirmPassword(!visibleConfirmPassword)}>
                {!visibleConfirmPassword && <IconHide />}
                {visibleConfirmPassword && <IconVisible />}
              </ButtonEye>
            </Label>

            <TextPassword>
              Пароль должен содержать не менее восьми знаков, включать буквы, цифры и специальные
              символы
            </TextPassword>
          </Fieldset>

          <NextButton>Далее</NextButton>
        </RegForm>
      </Container>
    </Section>
  );
};

export default RegistrationForm;
