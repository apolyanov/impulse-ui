import React, { useState } from 'react';
import { Container } from '@impulse-ui/layout';
import { QRScanner } from '@impulse-ui/qr';
import { Typography } from '@impulse-ui/text';
import { IScannerControls } from '@zxing/browser';
import { Result } from '@zxing/library';

const TablePage = () => {
  const [result, setResult] = useState<Result>();
  const [controls, setControls] = useState<IScannerControls>();

  return (
    <Container iStyle={{ iCss: { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 4 } }}>
      <QRScanner
        onDecode={(result, controls) => {
          setResult(result);
          setControls(controls);
        }}
      />
      <Typography as='pre'>{JSON.stringify(result, null, 2)}</Typography>
      <Typography as='pre'>{JSON.stringify(controls, null, 2)}</Typography>
    </Container>
  );
};

export default TablePage;
