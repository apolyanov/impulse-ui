import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';

import Navigation from './Navigation';

const Main = () => {
  return (
    <Container
      iStyle={{ iCss: { margin: 0, padding: 0, display: 'flex', flex: 1, width: '100%', flexDirection: 'row' } }}
    >
      <Navigation />
      <Container iStyle={{ iCss: { padding: 16, width: '100%' } }}>
        <GlobalStyle />
        <Outlet />
      </Container>
    </Container>
  );
};

export default Main;
