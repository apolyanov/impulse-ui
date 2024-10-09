import { faLightbulb, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@impulse-ui/buttons';
import { useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Container } from '@impulse-ui/layout';

import { useQrScanner } from '../../hooks';
import { qrScannerComponentMap } from '../../maps';
import { qrScannerStyle } from '../../styles';
import { QRScannerProps } from '../../types';

const QRScanner = ({ iStyle, ...rest }: QRScannerProps) => {
  const qrScannerProps = useQrScanner(rest);
  const { isScanning, toggleScanning, toggleTorch, canUseTorch, isTorchOn, mountVideoElement } = qrScannerProps;
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
  } = useComponentStyle(qrScannerComponentMap, stylesProps, iStyle, qrScannerStyle);

  return (
    <Container {...mainContainerStyle}>
      <Container {...qrScannerContainerStyle}>
        <Container {...topLeftQRCornerStyle} />
        <Container {...topRightQRCornerStyle} />
        <Container {...bottomLeftQRCornerStyle} />
        <Container {...bottomRightQRCornerStyle} />
        {!isScanning && <Icon {...placeholderIconStyle} icon={faQrcode} />}
        <Container {...videoStyle} as='video' ref={mountVideoElement} />
      </Container>
      <Container {...buttonsContainerStyle}>
        <IconButton iStyle={toggleScanningButtonStyle} onClick={toggleScanning} icon={faQrcode} />
        {canUseTorch && isScanning && (
          <IconButton iStyle={toggleTorchButtonStyle} onClick={toggleTorch} icon={faLightbulb} />
        )}
      </Container>
    </Container>
  );
};

export { QRScanner };
