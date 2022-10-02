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

    // font-size (MOBILE)
    --fs-250: 16px; // напрвления в карточках
    --fs-300: 12px; // дата в карточках + footer ссылки
    --fs-350: 14px; // header кнопки + ссылки
    --fs-400: 14px; // текст в hero
    --fs-500: 17px; // заголовок + кнопка в карточке
    --fs-600: 26px; // заголовки секций + в hero цифр в овале
    --fs-700: 30px; // логотип

    // line-height (MOBILE)
    --line-height-250: 19px; // напрвления в карточках
    --line-height-300: 14px; // дата в карточках + footer ссылки
    --line-height-350: 16px; // header кнопки + ссылки
    --line-height-400: 20px; // мелкий текст в hero
    --line-height-500: 20px; // заголовок + кнопка в карточке
    --line-height-600: 32px; // заголовки секций + в hero цифр в овале
    --line-height-700: 35px; // логотип


    @media (min-width: 768px) {
      // font-size (DESKTOP)
      --fs-250: 16px; // напрвления в карточках
      --fs-300: 12px; // дата в карточках + footer ссылки
      --fs-350: 14px; // header кнопки + ссылки
      --fs-400: 18px; // текст в hero
      --fs-500: 20px; // заголовок + кнопка в карточке
      --fs-600: 30px; // заголовки секций + в hero цифр в овале
      --fs-700: 35px; // логотип

      // line-height (DESKTOP)
      --line-height-250: 19px; // напрвления в карточках
      --line-height-300: 14px; // дата в карточках + footer ссылки
      --line-height-350: 16px; // header кнопки + ссылки
      --line-height-400: 21px; // текст в hero
      --line-height-500: 23px; // заголовок + кнопка в карточке
      --line-height-600: 35px; // заголовки секций + в hero цифр в овале
      --line-height-700: 41px; // логотип
    }

  }

  body {
    font-family: var(--ff-primary);
    font-weight: var(--fw-400);
    background-color: var(--color-white);
    color: var(--color-black);
    min-width: 320px;
  }
`;

export default Global;
