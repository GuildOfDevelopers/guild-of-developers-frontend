import styled from 'styled-components';

export const Container = styled.div`
  // не может быть больше (--max-width)
  // если ширина экрана меньше (--max-width),
  // то ширина 100% - (--space) по сторонам

  --max-width: 1200px;
  --space: 16px;

  width: min(var(--max-width), 100% - (var(--space) * 2));
  margin-inline: auto;
  position: relative;
`;
