import styled, { css } from 'styled-components';
import { Menu } from '@headlessui/react';

export const Section = styled.section`
  background-color: var(--color-white);
`;

export const Title = styled.h1`
  font-size: var(--fs-600);
  font-weight: var(--fw-700);
  line-height: var(--line-height-600);

  text-align: center;
  margin: 81px 0 32px;

  @media (min-width: 768px) {
    margin: 105px 0 39px;
  }
`;

export const BackBox = styled.div`
  position: absolute;
  top: -15px;
  left: 0;

  @media (min-width: 768px) {
    top: 10px;
    left: 0;
  }

  a {
    @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const BackBoxText = styled.span`
  display: none;
  font-size: var(--fs-350);
  line-height: var(--line-height-350);

  @media (min-width: 768px) {
    display: inline;
  }
`;

export const Wrapper = styled.form`
  position: relative;
  max-width: 792px;
  padding: 24px;
  margin: 0 auto 64px;
  background-color: var(--color-white-2);
  border-radius: 20px;

  @media (min-width: 768px) {
    padding: 64px 100px;
    margin: 0 auto 128px;
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
  align-items: flex-start;
  gap: 24px;

  &:nth-child(1) {
    padding-top: 0;
  }

  &:nth-child(2) {
    border: none;
    padding-bottom: 0;
  }

  @media (min-width: 768px) {
    &:nth-child(1) {
      padding-top: 44px;
    }
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

interface ButtonsBoxProps {
  paddingBlock: string;
  deskGap: string;
}

export const ButtonsBox = styled.div<ButtonsBoxProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 44px;
  gap: 24px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: ${(props) => props.deskGap};
    padding-block: ${(props) => props.paddingBlock};
  }
`;

export const FileInput = styled.input`
  display: none;
`;

interface BlackBtnProps {
  margin?: string;
  display?: string;
  width?: string;
}

export const BlackBtn = styled.button<BlackBtnProps>`
  min-width: 183px;
  padding: 12px 42px;
  max-width: 255px;
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};

  background-color: var(--color-grey);
  border-radius: 25px;
  border: none;

  font-size: var(--fs-500);
  font-weight: var(--fw-700);
  line-height: var(--line-height-350);
  text-align: center;
  color: var(--color-white);

  @media (min-width: 768px) {
    width: unset;
  }
`;

interface WhiteBtnProps {
  marginTop?: string;
}

export const WhiteBtn = styled.button<WhiteBtnProps>`
  min-width: 183px;
  max-width: 183px;
  width: 100%;
  padding: 9px 42px;
  margin-top: ${(props) => props.marginTop};

  background-color: var(--color-white);
  border-radius: 25px;
  border: 3px solid var(--color-black);

  font-size: var(--fs-500);
  font-weight: var(--fw-700);
  line-height: var(--line-height-350);
  text-align: center;
  color: var(--color-black);
`;

export const CropDiv = styled.div`
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: var(--color-grey-2);
`;

export const CropControls = styled.div`
  position: absolute;
  width: 100%;
  bottom: 5%;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  z-index: 101;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const CoverDiv = styled.div`
  width: 100%;
  margin-bottom: 40px;
  align-self: center;
  @media (min-width: 768px) {
    margin-bottom: 64px;
  }
`;

export const CoverImg = styled.img`
  width: 100%;
  height: 126px;
  border-radius: 15px;
  @media (min-width: 768px) {
    height: 185px;
  }
`;

export const CoverBox = styled.div`
  max-width: 588px;
  width: 100%;
  height: 126px;
  background-color: var(--color-grey-3);
  border-radius: 15px;
  margin: 0 auto;
  @media (min-width: 768px) {
    height: 185px;
  }
`;
