import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  position: relative;

  .filter__button {
    padding: 5px 22px;
    border-radius: 15px;
  }

  .filter__items {
    position: absolute;
    left: 0;
    top: 100%;
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
  }
`;

export const LeftFilter = styled.div``;

export const FilterButton = styled.button`
  padding: 5px 22px;
  border-radius: 15px;
  font-weight: var(--fw-400);
  font-size: var(--fs-500);
  line-height: var(--line-height-500);

  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out,
    font-weight 0.3s ease-in-out;

  ${({ active }: { active: boolean }) => {
    return (
      active &&
      css`
        font-weight: var(--fw-700);
        color: var(--color-white);
        background-color: var(--color-grey);
      `
    );
  }}
`;
