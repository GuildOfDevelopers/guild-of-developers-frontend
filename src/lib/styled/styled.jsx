import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&display=swap');
  ${normalize}

  body {
    --ff-primary: 'Raleway', sans-serif;

    --fw-300: 300; 
    --fw-400: 400; 
    --fw-500: 500; 
    --fw-600: 600; 
    --fw-700: 700; 
    --fw-800: 800;

    --fs-300: 15px;
    --fs-300: 15px;
    --fs-300: 15px;
    --fs-300: 15px;
    --fs-300: 15px;
    --fs-300: 15px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    
    font-family: var(--ff-primary);
    font-weight: var(--fw-400);
  }
`;

export default Global;
