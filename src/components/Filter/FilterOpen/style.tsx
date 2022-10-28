import styled from 'styled-components';
import { Menu } from '@headlessui/react';

export const Form = styled.form`
  .filter {
    position: relative;
    width: 256px;
  }

  .filter [id^='headlessui-menu-items'] {
    position: absolute;
    padding: 30px 32px;
    width: 100%;
    left: 0;
    top: 50px;
    display: flex;
    flex-direction: column;
    gap: 17px;
    background-color: var(--color-grey-3);
    border-radius: 7px;
  }
`;

export const FormName = styled.h3`
  margin: 0;
  margin-bottom: 28px;

  font-size: var(--fs-400);
  font-weight: var(--fw-700);
  line-height: var(--line-height-400);
`;

export const FormWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 25px;
`;

export const Submit = styled.button`
  padding: 10px 46px;
  color: var(--color-white);
  font-size: var(--fs-400);
  font-weight: var(--fw-700);
  line-height: var(--line-height-400);
  background-color: var(--color-grey);
  border-radius: 25px;
`;

export const Select = styled.div`
  position: relative;
  width: 256px;
`;

export const MenuButton = styled(Menu.Button)`
  position: relative;
  width: 256px;
  padding: 9px 19px;
  border-radius: 7px;
  background-color: var(--color-grey-3);

  font-family: Raleway;
  font-size: var(--fs-400);
  font-weight: var(--fw-400);
  line-height: var(--line-height-400);
  text-align: left;
  transition: font-weight 0.3s ease-in-out;

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

  &[data-headlessui-state='open'] {
    font-weight: var(--fw-600);
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
  top: 50px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  background-color: var(--color-grey-3);
  border-radius: 7px;
`;
