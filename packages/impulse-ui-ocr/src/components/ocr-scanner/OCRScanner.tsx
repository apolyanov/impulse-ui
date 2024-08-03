import { faLightbulb, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@impulse-ui/buttons';
import { useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Container } from '@impulse-ui/layout';

import { useOcrScanner } from '../../hooks';
import { ocrScannerComponentMap } from '../../maps';
import { ocrScannerStyle } from '../../styles';
import { OCRScannerProps } from '../../types';

const OCRScanner = ({ iStyle, ...rest }: OCRScannerProps) => {
  const ocrScannerProps = useOcrScanner(rest);
  const { isScanning, toggleScanning, toggleTorch, canUseTorch, isTorchOn, mountVideoElement } = ocrScannerProps;
  const stylesProps = { ...rest, isScanning, canUseTorch, isTorchOn };

  const {
    mainContainerStyle,
    qrScannerContainerStyle,
    topLeftQRCornerStyle,
    topRightQRCornerStyle,
    bottomLeftQRCornerStyle,
    bottomRightQRCornerStyle,
    videoStyle,
    placeholderIconStyle,
    buttonsContainerStyle,
    toggleScanningButtonStyle,
    toggleTorchButtonStyle,
  } = useComponentStyle(ocrScannerComponentMap, stylesProps, iStyle, ocrScannerStyle);

  return (
    <Container iStyle={mainContainerStyle}>
      <Container iStyle={qrScannerContainerStyle}>
        <Container iStyle={topLeftQRCornerStyle} />
        <Container iStyle={topRightQRCornerStyle} />
        <Container iStyle={bottomLeftQRCornerStyle} />
        <Container iStyle={bottomRightQRCornerStyle} />
        {!isScanning && <Icon iStyle={placeholderIconStyle} icon={faQrcode} />}
        <Container iStyle={videoStyle} as='video' ref={mountVideoElement} />
      </Container>
      <Container iStyle={buttonsContainerStyle}>
        <IconButton iStyle={toggleScanningButtonStyle} onClick={toggleScanning} icon={faQrcode} />
        {canUseTorch && isScanning && (
          <IconButton iStyle={toggleTorchButtonStyle} onClick={toggleTorch} icon={faLightbulb} />
        )}
      </Container>
    </Container>
  );
};

export { OCRScanner };
