import React, { useState } from 'react';
import { Container } from '@impulse-ui/layout';
import { NotFoundException, QRScanner } from '@impulse-ui/qr';
import { Typography } from '@impulse-ui/text';
import { QRCode } from 'jsqr-es6';

const TablePage = () => {
  const [result, setResult] = useState<QRCode>();

  return (
    <Container iStyle={{ iCss: { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 4 } }}>
      <QRScanner
        scanningInterval={50}
        onSuccess={(result) => {
          setResult(result);
        }}
        onError={(error) => {
          console.error(error instanceof NotFoundException);
        }}
      />
      <Typography as='pre'>{JSON.stringify(result?.location, null, 2)}</Typography>
    </Container>
  );
};

export default TablePage;
