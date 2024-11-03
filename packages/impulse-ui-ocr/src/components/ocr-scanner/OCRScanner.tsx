import { faLightbulb, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@impulse-ui/buttons';
import { useStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Container } from '@impulse-ui/layout';

import { useOcrScanner } from '../../hooks';
import { ocrScannerStyle } from '../../styles';
import { OCRScannerProps } from '../../types';

const OCRScanner = ({ iCss, iTheme, ...rest }: OCRScannerProps) => {
  const ocrScannerProps = useOcrScanner(rest);
  const { isScanning, toggleScanning, toggleTorch, canUseTorch, mountVideoElement } = ocrScannerProps;
  const stylesProps = { ...rest, ...ocrScannerProps };

  const iStyle = useStyle(stylesProps, ocrScannerStyle, iCss, iTheme);

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

export { OCRScanner };
