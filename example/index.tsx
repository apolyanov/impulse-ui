import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import 'react-app-polyfill/ie11';

import { Container, GlobalStyle, IThemeProvider } from '../src';

import router from './components/app.routes';
import { customTheme } from './components/customTheme';

const App = () => {
  return (
    <IThemeProvider themes={customTheme}>
      <Container iStyle={{ iCss: () => ({ margin: 0, padding: 0, minHeight: '100vh' }) }}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </Container>
    </IThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
