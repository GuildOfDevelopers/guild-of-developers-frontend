import { css } from 'styled-components';

const normalize = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  ul,
  ol {
    list-style: none;
  }

  html {
    scroll-behavior: smooth;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
  }

  a {
    text-decoration: inherit;
    color: inherit;
  }

  img,
  picture,
  svg {
    display: block;
  }

  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  button {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
  }
`;

export default normalize;
