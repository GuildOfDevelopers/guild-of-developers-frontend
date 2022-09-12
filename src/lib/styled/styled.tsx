import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&display=swap');
  ${normalize}

  :root {
    --ff-primary: 'Raleway', sans-serif;

    --fw-300: 300; 
    --fw-400: 400; 
    --fw-500: 500; 
    --fw-600: 600; 
    --fw-700: 700; 
    --fw-800: 800;

    --fs-200: 12px;
    --fs-300: 13px;
    --fs-400: 15px;
    --fs-500: 17px;
    --fs-600: 19px;
    --fs-700: 20px;
    --fs-800: 30px;
    --fs-900: 35px;

    --line-height-200: 20px;
    --line-height-300: 21px;
    --line-height-400: 22px;
    --line-height-500: 20px;
    --line-height-600: 20px;
    --line-height-700: 20px;
    --line-height-800: 35px;
    --line-height-900: 41px;
  }

  body {
    font-family: var(--ff-primary);
    font-weight: var(--fw-400);
  }
`;

export default Global;
