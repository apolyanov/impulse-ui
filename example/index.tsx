import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Container } from '@impulse-ui/layout';

import 'react-app-polyfill/ie11';

import router from './components/app.routes';

const App = () => {
  return (
    <Container iStyle={{ iCss: { margin: 0, padding: 0, minHeight: '100vh', width: '100%' } }}>
      <RouterProvider router={router} />
    </Container>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
