import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@impulse-ui/layout';

import Navigation from './Navigation';

const Main = () => {
  return (
    <Container iStyle={{ iCss: () => ({ margin: 0, padding: 0, flex: 1, flexDirection: 'row' }) }}>
      <Navigation />
      <Container>
        <Outlet />
      </Container>
    </Container>
  );
};

export default Main;
