import { createGlobalStyle, css } from 'styled-components';

import '../../css/index.css';

import { neutral4, neutral6, neutral7 } from './colors';

const GlobalStyle = createGlobalStyle`
  ${() => css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
      margin: 0;
    }

    ul[role='list'],
    ol[role='list'] {
      list-style: none;
    }

    html:focus-within {
      scroll-behavior: smooth;
    }

    body {
      height: 100%;
      display: block;
      text-rendering: auto;
    }

    a:not([class]) {
      text-decoration-skip-ink: auto;
    }

    img,
    picture {
      max-width: 100%;
      display: block;
    }

    input,
    button,
    textarea,
    select {
      border-style: none;
      font: inherit;
    }

    *:focus {
      outline: none;
    }

    ::-webkit-scrollbar {
      width: 10px;
      border-radius: 4px;
      transition: all 0.2s ease-in-out;
    }

    ::-webkit-scrollbar-track {
      background: ${neutral4};
      border-radius: 4px;
      transition: all 0.2s ease-in-out;
    }

    ::-webkit-scrollbar-thumb {
      background: ${neutral6};
      border-radius: 4px;
      transition: all 0.2s ease-in-out;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${neutral7};
      border-radius: 4px;
      transition: all 0.2s ease-in-out;
    }
  `}
`;

export { GlobalStyle };
