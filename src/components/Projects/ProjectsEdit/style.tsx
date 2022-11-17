import styled from 'styled-components';

export const Section = styled.section`
  background-color: var(--color-white);
  position: relative;
`;

export const Title = styled.h1`
  font-size: var(--fs-600);
  font-weight: var(--fw-700);
  line-height: var(--line-height-600);

  text-align: center;
  margin: 81px 0 32px;

  @media (min-width: 768px) {
    margin: 105px 0 64px;
  }
`;

export const BackBox = styled.div`
  position: absolute;
  top: -15px;

  @media (min-width: 768px) {
    top: 10px;

    a {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;

export const Grid = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, min(588px, 100%));
  gap: 24px;
  margin-bottom: 32px;
`;
