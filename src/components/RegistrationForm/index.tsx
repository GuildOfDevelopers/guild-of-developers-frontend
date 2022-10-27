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

const RegistrationForm: FC = () => {
  const [visiblePassword, setVisiblePassword] = React.useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = React.useState(false);

  const departments = [
    {
      name: 'direction[]',
      value: 'Backend',
      val: false
    },
    {
      name: 'direction[]',
      value: 'Frontend',
      val: false
    },
    {
      name: 'direction[]',
      value: 'UI/UX',
      val: false
    },
    {
      name: 'direction[]',
      value: 'Тестировщик ПО',
      val: false
    },
    {
      name: 'direction[]',
      value: 'Project-менеджер',
      val: false
    },
    {
      name: 'direction[]',
      value: 'Контроллёр',
      val: false
    },
    {
      name: 'direction[]',
      value: 'Data Scientist',
      val: false
    }
  ];

  const stack = [
    {
      name: 'stack[]',
      value: 'Python',
      val: false
    },
    {
      name: 'stack[]',
      value: 'FastApi',
      val: false
    },
    {
      name: 'stack[]',
      value: 'PostgreSQL',
      val: false
    },
    {
      name: 'stack[]',
      value: 'Тестировщик ПО',
      val: false
    },
    {
      name: 'stack[]',
      value: 'pydantic',
      val: false
    }
  ];

  return (
    <Section>
      <Container>
        <Title>Регистрация нового пользователя</Title>

        <RegForm>
          <Fieldset>
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
          </Fieldset>

          <Fieldset>
            <Label fill>
              <LabelText>Направление (одно или несколько)</LabelText>
              <Menu>
                <MenuButton>Выберете</MenuButton>

                <MenuItems>
                  <DropdownList type="checkbox" list={departments} />
                </MenuItems>
              </Menu>
            </Label>

            <Label fill>
              <LabelText>Стек (один или несколько)</LabelText>
              <Menu>
                <MenuButton>Выберете</MenuButton>

                <MenuItems>
                  <DropdownList type="checkbox" list={stack} />
                </MenuItems>
              </Menu>
            </Label>

            <Label>
              <LabelText>GitHub/GitLab/Behance</LabelText>
              <InputText name="git" placeholder="Укажите ссылку" />
            </Label>

            <Label>
              <LabelText>Ссылка на портфолио</LabelText>
              <InputText name="portfolio" placeholder="Укажите ссылку" />
            </Label>
          </Fieldset>

          <Fieldset>
            <Label>
              <LabelText>О себе</LabelText>
              <Textarea name="text" placeholder="Начните вводить...."></Textarea>
            </Label>
          </Fieldset>

          <Fieldset>
            <Label>
              <LabelText>Пароль*</LabelText>

              <InputPassword
                name="password"
                type={visiblePassword ? 'text' : 'password'}
                placeholder="Введите"
              />

              <ButtonEye onClick={() => setVisiblePassword(!visiblePassword)}>
                {!visiblePassword && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <path
                      fill="#2B3151"
                      fill-rule="evenodd"
                      d="M32 18.667c-9.728 0-18.023 5.751-21.438 13.851a1.333 1.333 0 1 1-2.457-1.036C11.942 22.382 21.212 16 32 16s20.058 6.382 23.895 15.482a1.333 1.333 0 0 1-2.457 1.036c-3.415-8.1-11.71-13.851-21.438-13.851Z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#2B3151"
                      fill-rule="evenodd"
                      d="M32 45.333c-9.728 0-18.023-5.751-21.438-13.851a1.333 1.333 0 1 0-2.457 1.036C11.942 41.618 21.212 48 32 48s20.058-6.382 23.895-15.482a1.333 1.333 0 0 0-2.457-1.036c-3.415 8.1-11.71 13.851-21.438 13.851Z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#2B3151"
                      fill-rule="evenodd"
                      d="M32 25.334a6.667 6.667 0 1 0 0 13.333 6.667 6.667 0 0 0 0-13.333ZM22.667 32a9.333 9.333 0 1 1 18.666 0 9.333 9.333 0 0 1-18.666 0Z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#2B3151"
                      fill-rule="evenodd"
                      d="M55.61 8.39c.52.521.52 1.365 0 1.886L10.275 55.61a1.333 1.333 0 1 1-1.885-1.886L53.724 8.39c.52-.521 1.365-.521 1.886 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}

                {visiblePassword && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <path
                      fill="#2B3151"
                      fill-rule="evenodd"
                      d="M32 18.667c-9.729 0-18.023 5.751-21.438 13.851a1.333 1.333 0 1 1-2.457-1.036C11.942 22.382 21.212 16 32 16s20.058 6.382 23.895 15.482a1.333 1.333 0 1 1-2.457 1.036c-3.415-8.1-11.71-13.851-21.438-13.851Z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#2B3151"
                      fill-rule="evenodd"
                      d="M32 45.333c-9.729 0-18.023-5.751-21.438-13.851a1.333 1.333 0 1 0-2.457 1.036C11.942 41.618 21.212 48 32 48s20.058-6.382 23.895-15.482a1.333 1.333 0 1 0-2.457-1.036c-3.415 8.1-11.71 13.851-21.438 13.851Z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#2B3151"
                      fill-rule="evenodd"
                      d="M32 25.334a6.667 6.667 0 1 0 0 13.333 6.667 6.667 0 0 0 0-13.333ZM22.667 32a9.333 9.333 0 1 1 18.666 0 9.333 9.333 0 0 1-18.666 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}
              </ButtonEye>
            </Label>

            <Label>
              <InputPassword
                name="confirm_password"
                type={visibleConfirmPassword ? 'text' : 'password'}
                placeholder="Введите еще раз"
              />

              <ButtonEye onClick={() => setVisibleConfirmPassword(!visibleConfirmPassword)}>
                {!visibleConfirmPassword && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <path
                      fill="#2B3151"
                      fill-rule="evenodd"
                      d="M32 18.667c-9.728 0-18.023 5.751-21.438 13.851a1.333 1.333 0 1 1-2.457-1.036C11.942 22.382 21.212 16 32 16s20.058 6.382 23.895 15.482a1.333 1.333 0 0 1-2.457 1.036c-3.415-8.1-11.71-13.851-21.438-13.851Z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#2B3151"
                      fill-rule="evenodd"
                      d="M32 45.333c-9.728 0-18.023-5.751-21.438-13.851a1.333 1.333 0 1 0-2.457 1.036C11.942 41.618 21.212 48 32 48s20.058-6.382 23.895-15.482a1.333 1.333 0 0 0-2.457-1.036c-3.415 8.1-11.71 13.851-21.438 13.851Z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#2B3151"
                      fill-rule="evenodd"
                      d="M32 25.334a6.667 6.667 0 1 0 0 13.333 6.667 6.667 0 0 0 0-13.333ZM22.667 32a9.333 9.333 0 1 1 18.666 0 9.333 9.333 0 0 1-18.666 0Z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#2B3151"
                      fill-rule="evenodd"
                      d="M55.61 8.39c.52.521.52 1.365 0 1.886L10.275 55.61a1.333 1.333 0 1 1-1.885-1.886L53.724 8.39c.52-.521 1.365-.521 1.886 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}

                {visibleConfirmPassword && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <path
                      fill="#2B3151"
                      fill-rule="evenodd"
                      d="M32 18.667c-9.729 0-18.023 5.751-21.438 13.851a1.333 1.333 0 1 1-2.457-1.036C11.942 22.382 21.212 16 32 16s20.058 6.382 23.895 15.482a1.333 1.333 0 1 1-2.457 1.036c-3.415-8.1-11.71-13.851-21.438-13.851Z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#2B3151"
                      fill-rule="evenodd"
                      d="M32 45.333c-9.729 0-18.023-5.751-21.438-13.851a1.333 1.333 0 1 0-2.457 1.036C11.942 41.618 21.212 48 32 48s20.058-6.382 23.895-15.482a1.333 1.333 0 1 0-2.457-1.036c-3.415 8.1-11.71 13.851-21.438 13.851Z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#2B3151"
                      fill-rule="evenodd"
                      d="M32 25.334a6.667 6.667 0 1 0 0 13.333 6.667 6.667 0 0 0 0-13.333ZM22.667 32a9.333 9.333 0 1 1 18.666 0 9.333 9.333 0 0 1-18.666 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}
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
