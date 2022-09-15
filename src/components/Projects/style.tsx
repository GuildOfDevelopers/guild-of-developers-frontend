import styled from 'styled-components';

export const Section = styled.section`
  background-color: var(--color-white);
`;

export const Wrapper = styled.div`
  padding-block: 105px;
`;

export const Title = styled.h2`
  margin-bottom: 40px;

  text-align: center;
  font-weight: var(--fw-700);
  font-size: var(--fs-600);
  line-height: var(--line-height-600);
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, min(377px, 100%));
  justify-content: center;
  align-items: center;
  gap: 34.5px;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  padding: 24px;

  background-color: var(--color-white-2);
`;

export const CardButton = styled.button`
  margin-top: 15px; // TODO: временно

  width: 179px;
  height: 42px;

  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-white);
  background-color: var(--color-grey);

  font-weight: var(--fw-700);
  font-size: var(--fs-500);
  line-height: var(--line-height-500);
  text-align: center;

  transition: transform 0.3s ease-out;

  &:hover,
  &:focus-visible {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1.05);
  }
`;
