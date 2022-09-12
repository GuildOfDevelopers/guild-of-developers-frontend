import styled from 'styled-components';

export const Container = styled.div`
  --max-width: 1200px;
  --space: 16px;

  width: min(var(--max-width), 100% - (var(--space) * 2));
  margin-inline: auto;
`;
