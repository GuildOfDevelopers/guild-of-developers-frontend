import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&display=swap');
  ${normalize}

  :root {
    // font
    --ff-primary: 'Raleway', sans-serif;

    // colors
    --color-black: #000000;

    --color-white: #ffffff;
    --color-white-2: #efefef;

    --color-grey: #2d2d2d;
    --color-grey-2: #c3c3c3;
    --color-grey-3: #d9d9d9;

    // font-weight
    --fw-300: 300; 
    --fw-400: 400; 
    --fw-500: 500; 
    --fw-600: 600; 
    --fw-700: 700; 
    --fw-800: 800;

    // font-size
    --fs-300: 12px;
    --fs-350: 14px;
    --fs-400: 18px;
    --fs-500: 20px;
    --fs-600: 30px;
    --fs-700: 35px;

    // line-height
    --line-height-300: 14px;
    --line-height-350: 16px;
    --line-height-400: 21px;
    --line-height-500: 23px;
    --line-height-600: 35px;
    --line-height-700: 41px;

  }

  body {
    font-family: var(--ff-primary);
    font-weight: var(--fw-400);
    background-color: var(--color-white);
    color: var(--color-black);
  }
`;

export default Global;
