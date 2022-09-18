import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
`;

export const LeftFilter = styled.div``;

export const FilterButtons = styled.button`
  padding: 5px 22px;
  border-radius: 15px;
  font-weight: var(--fw-400);
  font-size: var(--fs-500);
  line-height: var(--line-height-500);

  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out,
    font-weight 0.3s ease-in-out;

  &.active {
    font-weight: var(--fw-700);
    color: var(--color-white);
    background-color: var(--color-grey);
  }
`;
