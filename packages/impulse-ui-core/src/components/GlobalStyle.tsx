import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  ul,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    padding: 0;
    margin: 0;
  }

  table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  table {
    border-spacing: 0;
  }

  ul,
  ol,
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
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
    background: #f0f0f0;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
  }

  ::-webkit-scrollbar-thumb {
    background: #bfbfbf;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #8c8c8c;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
  }
`;

export { GlobalStyle };
