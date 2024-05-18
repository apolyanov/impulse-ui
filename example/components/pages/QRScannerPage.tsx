import React, { useState } from 'react';
import { Container } from '@impulse-ui/layout';
import { QRScanner } from '@impulse-ui/qr';
import { Typography } from '@impulse-ui/text';
import { IScannerControls } from '@zxing/browser';
import { Exception, Result } from '@zxing/library';

const TablePage = () => {
  const [result, setResult] = useState<Result>();
  const [error, setError] = useState<Exception>();
  const [controls, setControls] = useState<IScannerControls>();

  return (
    <Container iStyle={{ iCss: { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 4 } }}>
      <QRScanner
        onDecode={(result, controls) => {
          setResult(result);
          setControls(controls);
        }}
        onError={(error, controls) => {
          setError(error);
          setControls(controls);
        }}
      />
      <Typography>{result?.getTimestamp()}</Typography>
    </Container>
  );
};

export default TablePage;
