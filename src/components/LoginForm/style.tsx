import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Section = styled.section`
  background-color: var(--color-white);
`;

export const Wrapper = styled.form`
  padding-block: 180px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  background-color: var(--color-white);
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: var(--fw-700);
  font-size: var(--fs-600);
  line-height: var(--line-height-600);
`;

export const TwoColumns = styled.div`
  display: flex;
`;

export const RegForm = styled.form`
  padding: 32px 25px;
  background-color: var(--color-white-2);
  border-radius: 20px;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    min-width: 384px;
    margin-inline: 125px;
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

export const InputEmail = styled.input.attrs({
  type: 'email'
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

export const InputPassword = styled.input.attrs({
  autocomplete: 'disable'
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

export const NextButton = styled(Link)`
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
