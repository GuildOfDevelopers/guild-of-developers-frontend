import styled, { css } from 'styled-components';
import { Menu } from '@headlessui/react';

export const Section = styled.section`
  background-color: var(--color-white);
  padding-top: 81px;
  padding-bottom: 64px;

  @media (min-width: 768px) {
    padding-top: 105px;
    padding-bottom: 128px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 32px;
  text-align: center;
  font-weight: var(--fw-700);
  font-size: var(--fs-600);
  line-height: var(--line-height-700);
  color: var(--color-black);

  @media (min-width: 768px) {
    margin-bottom: 39px;
    font-size: var(--fs-700);
  }
`;

export const RegForm = styled.form`
  max-width: 792px;
  margin: 0 auto;
  padding: 24px 24px 31px;
  background-color: var(--color-white-2);
  border-radius: 20px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 20px 100px 64px;
  }
`;

export const Fieldset = styled.fieldset`
  padding-top: 44px;
  padding-bottom: 44px;
  border: none;
  border-bottom: 1px solid var(--color-grey-2);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;

  &:nth-child(1) {
    padding-top: 0;
  }

  &:nth-child(4) {
    border: none;
  }

  @media (min-width: 768px) {
    &:nth-child(1) {
      padding-top: 44px;
    }
  }
`;

export const NextButton = styled.button.attrs({
  type: 'button'
})`
  padding: 8px 58px;
  width: 100%;
  border-radius: 25px;
  font-size: var(--fs-550);
  line-height: var(--line-height-550);
  font-weight: var(--fw-700);
  color: var(--color-white);
  background-color: var(--color-grey);

  @media (min-width: 768px) {
    width: initial;
  }
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  gap: 10px;
  position: relative;
  flex-grow: 1;

  @media (min-width: 768px) {
    width: initial;

    ${({ wfill }: { wfill?: boolean }) => {
      return (
        wfill &&
        css`
          width: 100%;
        `
      );
    }}
  }
`;

export const LabelText = styled.span`
  font-size: var(--fs-450);
  font-weight: var(--fw-600);
  line-height: var(--line-height-500);
`;

export const InputText = styled.input.attrs({
  type: 'text'
})`
  width: 100%;
  padding: 12px 24px;
  border: 2px solid var(--color-grey);
  border-radius: 15px;
  font-size: var(--fs-400);
  background: transparent;

  &::placeholder {
    font-size: var(--fs-400);
    font-weight: var(--fw-400);
    line-height: var(--line-height-500);
  }

  &:focus {
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 134px;
  padding: 12px 24px;
  border: 2px solid var(--color-grey);
  border-radius: 15px;
  font-size: var(--fs-400);
  background: transparent;
  resize: none;

  &::placeholder {
    font-size: var(--fs-400);
    font-weight: var(--fw-400);
    line-height: var(--line-height-500);
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    height: 90px;
  }
`;

export const InputPassword = styled.input.attrs({
  autocomplete: 'disable'
})`
  width: 100%;
  padding: 12px 46px 12px 24px;
  border: 2px solid var(--color-grey);
  border-radius: 15px;
  font-size: var(--fs-400);
  background: transparent;

  &::placeholder {
    font-size: var(--fs-400);
    font-weight: var(--fw-400);
    line-height: var(--line-height-500);
  }

  &:focus {
    outline: none;
  }
`;

export const ButtonEye = styled.button.attrs({
  type: 'button'
})`
  position: absolute;
  bottom: 13px;
  right: 16px;

  & svg {
    fill: var(--color-grey);
  }
`;

export const TextPassword = styled.p`
  text-align: left;
  font-size: var(--fs-400);
  font-weight: var(--fw-400);
  line-height: var(--line-height-500);
`;

export const MenuButton = styled(Menu.Button)`
  position: relative;
  width: 100%;
  padding: 12px 24px;
  border: 2px solid var(--color-grey);
  border-radius: 15px;

  font-size: var(--fs-400);
  font-weight: var(--fw-400);
  line-height: var(--line-height-400);
  text-align: left;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 14px;
    width: 0;
    height: 0;
    border-top: 9px solid var(--color-black);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    transition: all 0.3s ease-in-out;
  }

  &[data-headlessui-state='open']::before {
    border-top: none;
    border-bottom: 9px solid var(--color-black);
  }
`;

export const MenuItems = styled(Menu.Items)`
  position: absolute;
  padding: 30px 32px;
  width: 100%;
  left: 0;
  top: 110%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 17px;
  background-color: var(--color-grey-3);
  border-radius: 7px;
`;
