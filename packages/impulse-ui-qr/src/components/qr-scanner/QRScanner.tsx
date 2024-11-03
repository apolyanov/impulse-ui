import { faLightbulb, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@impulse-ui/buttons';
import { useStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Container } from '@impulse-ui/layout';

import { useQrScanner } from '../../hooks';
import { QRScannerProps } from '../../types';
import { ocrScannerStyle } from '@impulse-ui/ocr';

const QRScanner = ({ iCss, iTheme, ...rest }: QRScannerProps) => {
  const qrScannerProps = useQrScanner(rest);
  const { isScanning, toggleScanning, toggleTorch, canUseTorch, mountVideoElement } = qrScannerProps;

  const iStyle = useStyle({ ...rest, ...qrScannerProps }, ocrScannerStyle, iCss, iTheme);

  return (
    <Container iCss={iStyle?.iCss} iTheme={iStyle?.iTheme} className='IMUI-OCRScanner-root'>
      <Container className='IMUI-OCRScanner-video'>
        <Container className='IMUI-OCRScanner-constraint top-left' />
        <Container className='IMUI-OCRScanner-constraint top-right' />
        <Container className='IMUI-OCRScanner-constraint bottom-left' />
        <Container className='IMUI-OCRScanner-constraint top-right' />
        {!isScanning && <Icon className='IMUI-OCRScanner-placeholder-icon' icon={faQrcode} />}
        <Container className='IMUI-OCRScanner-video' as='video' ref={mountVideoElement} />
      </Container>
      <Container className='IMUI-OCRScanner-actions'>
        <IconButton className='toggle-scanning' onClick={toggleScanning} icon={faQrcode} />
        {canUseTorch && isScanning && <IconButton className='toggle-torch' onClick={toggleTorch} icon={faLightbulb} />}
      </Container>
    </Container>
  );
};

export { QRScanner };
