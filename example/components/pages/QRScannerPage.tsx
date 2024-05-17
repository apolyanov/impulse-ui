import React from 'react';
import { Container } from '@impulse-ui/layout';
import { QRScanner } from '@impulse-ui/qr';

const TablePage = () => {
  return (
    <Container iStyle={{ iCss: { display: 'flex', justifyContent: 'center' } }}>
      <QRScanner />
    </Container>
  );
};

export default TablePage;
