import styled from 'styled-components';

export const Form = styled.form`
  position: absolute;
  left: 0;
  bottom: -140px;
  width: 100%;
  padding: 30px 25px;
  border-radius: 15px;
  border-top-right-radius: 0;
  background-color: var(--color-white-2);

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

export const FormButton = styled.button`
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

  &.open {
    font-weight: var(--fw-600);
  }

  &.open::before {
    border-top: none;
    border-bottom: 9px solid var(--color-black);
  }
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

export const Dropdown = styled.div`
  position: absolute;
  width: 256px;
  height: 400px;
  background-color: var(--color-grey-3);
`;
