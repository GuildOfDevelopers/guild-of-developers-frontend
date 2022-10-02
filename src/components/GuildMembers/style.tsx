import styled from 'styled-components';

export const Section = styled.section`
  background-color: var(--color-white);
`;

export const Wrapper = styled.div`
  padding-block: 105px 105px;
`;

export const Title = styled.h2`
  margin: 0 0 45px 0;
  font-weight: var(--fw-700);
  font-size: 30px;
  line-height: 35px;
  color: var(--color-black);
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, min(588px, 100%));
  gap: 24px;
`;
