import styled from 'styled-components';

export const Section = styled.section`
  background-color: var(--color-white);
`;

export const Wrapper = styled.div`
  padding-block: 105px 135px;
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
  justify-content: center;
  grid-template-columns: repeat(auto-fill, min(377px, 100%));
  gap: 34.5px;
`;
