import styled from 'styled-components';

export const Section = styled.section`
  background-color: var(--color-white);
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
`;
