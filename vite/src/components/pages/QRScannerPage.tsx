import { Container } from '@impulse-ui/layout';
import { QRScanner } from '@impulse-ui/qr';
import { Typography } from '@impulse-ui/text';
import { QRCode } from 'jsqr-es6';
import { useCallback, useState } from 'react';

const QRScannerPage = () => {
  const [result, setResult] = useState<QRCode>();

  const onSuccess = useCallback((result: QRCode) => {
    setResult(result);
  }, []);

  return (
    <Container iStyle={{ iCss: { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 4 } }}>
      <QRScanner scanningInterval={50} onSuccess={onSuccess} />
      <Typography as='pre'>{JSON.stringify(result?.location, null, 2)}</Typography>
    </Container>
  );
};

export default QRScannerPage;
