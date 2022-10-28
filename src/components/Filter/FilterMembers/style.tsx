import styled, { css } from 'styled-components';
import { Menu } from '@headlessui/react';

export const Wrapper = styled.div`
  padding-bottom: 40px;
`;

export const TopFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 40px;
  position: relative;
`;

export const BottomFilter = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
`;

export const BottomFilterButton = styled.button`
  flex-shrink: 0;
  width: 179px;
  padding: 12px 16px;
  background-color: var(--color-white-2);
  border-radius: 15px;
  text-align: center;
  font-size: var(--fs-250);
  font-weight: var(--fw-600);
  line-height: var(--line-height-250);
  line-break: 19px;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  ${({ active }: { active?: boolean }) => {
    return (
      active &&
      css`
        color: var(--color-white);
        background-color: var(--color-grey);
      `
    );
  }}
`;

export const SearchButtonFilter = styled.button`
  position: relative;

  padding: 5px 22px;
  border-radius: 15px;
  font-weight: var(--fw-400);
  font-size: var(--fs-500);
  line-height: var(--line-height-500);
  font-weight: var(--fw-700);
  color: var(--color-white);
  background-color: var(--color-grey);
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out,
    font-weight 0.3s ease-in-out;

  // TODO: временно - только для еще не готовых ссылок
  ${({ wip }: { wip: boolean }) => {
    return (
      wip &&
      css`
        &:hover,
        &:focus-visible {
          &::after {
            content: 'Скоро';

            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            /* min-width: 130px; */
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 15px;
            background-color: var(--color-grey-2);
            color: var(--color-black);
            font-size: var(--fs-350);
            font-weight: var(--fw-700);
            line-height: var(--line-height-350);
            text-align: center;
          }
        }
      `
    );
  }}
`;

export const MenuButton = styled(Menu.Button)`
  padding: 5px 22px;
  border-radius: 15px;
`;

export const MenuItems = styled(Menu.Items)`
  position: absolute;
  left: 0;
  bottom: -140px;
  width: 100%;
  padding: 30px 25px;
  border-radius: 15px;
  border-top-right-radius: 0;
  background-color: var(--color-white-2);
  z-index: 100;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -25px;
    right: 0;
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 25px solid var(--color-white-2);
  }
`;
