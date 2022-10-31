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

  const { departments } = useRegistrationStore();

  // const departments = [
  //   {
  //     name: 'direction[]',
  //     value: 'Backend',
  //     val: false
  //   },
  //   {
  //     name: 'direction[]',
  //     value: 'Frontend',
  //     val: false
  //   },
  //   {
  //     name: 'direction[]',
  //     value: 'UI/UX',
  //     val: false
  //   },
  //   {
  //     name: 'direction[]',
  //     value: 'Тестировщик ПО',
  //     val: false
  //   },
  //   {
  //     name: 'direction[]',
  //     value: 'Project-менеджер',
  //     val: false
  //   },
  //   {
  //     name: 'direction[]',
  //     value: 'Контроллёр',
  //     val: false
  //   },
  //   {
  //     name: 'direction[]',
  //     value: 'Data Scientist',
  //     val: false
  //   }
  // ];

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

  const [currentDepartments, setCurrentDepartments] = React.useState([]);

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
            <Label wfill>
              <LabelText>Направление (одно или несколько)</LabelText>
              <Menu>
                <MenuButton>Выберете</MenuButton>

                <MenuItems>
                  <DropdownList type="checkbox" name="department" />
                </MenuItems>
              </Menu>
            </Label>

            {/* <Label wfill>
              <LabelText>Стек (один или несколько)</LabelText>
              <Menu>
                <MenuButton>
                  {currentDepartments.length !== 0 ? currentDepartments.join(', ') : 'Выберете'}
                </MenuButton>

                <MenuItems>
                  <DropdownList type="checkbox" list={stack} />
                </MenuItems>
              </Menu>
            </Label> */}

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
                {!visiblePassword && <IconHide />}
                {visiblePassword && <IconVisible />}
              </ButtonEye>
            </Label>

            <Label>
              <InputPassword
                name="confirm_password"
                type={visibleConfirmPassword ? 'text' : 'password'}
                placeholder="Введите еще раз"
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
