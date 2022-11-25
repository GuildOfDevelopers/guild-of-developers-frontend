import { Menu } from '@headlessui/react';
import React, { FC } from 'react';
import { Container } from '../../../lib/styled/container';
import { useRegistrationStore } from '../../../zustand-store';
import DropdownList from '../../DropdownList';
import {
  EditForm,
  Fieldset,
  InputText,
  Label,
  LabelText,
  MenuButton,
  MenuItems,
  Section,
  Title,
  ButtonEye,
  Textarea,
  TextPassword,
  InputPassword,
  NextButton
} from './style';
import { IconVisible, IconHide } from './icon';
import { useNavigate } from 'react-router-dom';

const ProfileEdit: FC = () => {
  const [visiblePassword, setVisiblePassword] = React.useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = React.useState(false);
  const { checkedDepartments } = useRegistrationStore();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/profile');
  };

  return (
    <Section>
      <Container>
        <Title>Редактировать профиль</Title>
        <EditForm>
          <Fieldset>
            <Label>
              <LabelText>Имя*</LabelText>
              <InputText placeholder="Введите" onChange={() => ({})} />
            </Label>

            <Label>
              <LabelText>Фамилия*</LabelText>
              <InputText placeholder="Введите" onChange={() => ({})} />
            </Label>

            <Label>
              <LabelText>Никнейм*</LabelText>
              <InputText placeholder="Введите" onChange={() => ({})} />
            </Label>

            <Label>
              <LabelText>Город проживания*</LabelText>
              <InputText placeholder="Введите" onChange={() => ({})} />
            </Label>

            <Label>
              <LabelText>Telegram*</LabelText>
              <InputText placeholder="Введите через @" onChange={() => ({})} />
            </Label>

            <Label>
              <LabelText>Email*</LabelText>
              <InputText placeholder="Введите" onChange={() => ({})} />
            </Label>
          </Fieldset>

          <Fieldset>
            <Label wfill>
              <LabelText>Направление (одно или несколько)</LabelText>
              <Menu>
                <MenuButton>
                  {checkedDepartments()
                    .map((item) => item.name)
                    .join(', ') || 'Выберите'}
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
                      .join(', ') || 'Выберите'}
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
              <InputText placeholder="Укажите ссылку" onChange={() => ({})} />
            </Label>

            <Label>
              <LabelText>Ссылка на портфолио</LabelText>
              <InputText placeholder="Укажите ссылку" onChange={() => ({})} />
            </Label>
          </Fieldset>
          <Fieldset>
            <Label>
              <LabelText>О себе</LabelText>
              <Textarea placeholder="Начните вводить...." onChange={() => ({})}></Textarea>
            </Label>
          </Fieldset>

          <Fieldset>
            <Label>
              <LabelText>Пароль*</LabelText>

              <InputPassword
                type={visiblePassword ? 'text' : 'password'}
                placeholder="Введите"
                onChange={() => ({})}
              />

              <ButtonEye onClick={() => setVisiblePassword(!visiblePassword)}>
                {!visiblePassword && <IconHide />}
                {visiblePassword && <IconVisible />}
              </ButtonEye>
            </Label>
            <Label>
              <InputPassword
                type={visibleConfirmPassword ? 'text' : 'password'}
                placeholder="Введите еще раз"
                onChange={() => ({})}
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
          <NextButton onClick={handleSubmit}>Сохранить</NextButton>
        </EditForm>
      </Container>
    </Section>
  );
};

export default ProfileEdit;
