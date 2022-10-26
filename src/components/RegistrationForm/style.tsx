import styled from 'styled-components';

export const Section = styled.section`
  background-color: var(--color-white);
`;

export const Title = styled.h2`
  margin-top: 105px;
  margin-bottom: 39px;
  text-align: center;
  font-weight: var(--fw-700);
  font-size: var(--fs-700);
  line-height: var(--line-height-700);
  color: var(--color-black);
`;

export const RegForm = styled.form`
  max-width: 792px;
  margin: 0 auto 128px;
  padding: 20px 100px 64px;
  background-color: var(--color-white-2);
  border-radius: 20px;
  text-align: center;
`;

export const Fildset = styled.fieldset`
  padding-top: 44px;
  padding-bottom: 44px;
  border: none;
  border-bottom: 1px solid var(--color-grey-2);

  &:first-child {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &:last-child {
    border: none;
  }
`;

export const NextButton = styled.button.attrs({
  type: 'button'
})`
  margin-top: 44px;
  padding: 8px 58px;
  border-radius: 25px;
  font-size: var(--fs-550);
  line-height: var(--line-height-550);
  font-weight: var(--fw-700);
  color: var(--color-white);
  background-color: var(--color-grey);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 282px;
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
  border: 2px solid var(--color-grey);
  border-radius: 15px;
`;
