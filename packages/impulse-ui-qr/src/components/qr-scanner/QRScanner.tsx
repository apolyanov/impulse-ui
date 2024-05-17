import React from 'react';
import { faLightbulb, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@impulse-ui/buttons';
import { useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Container } from '@impulse-ui/layout';
import { QRScannerProps } from '@impulse-ui/types';

import { useQrScanner } from '../../hooks';
import { qrScannerComponentMap } from '../../maps';
import { qrScannerStyle } from '../../styles';

const QRScanner = ({ iStyle, onDecode, onError, readerOptions, ...rest }: QRScannerProps) => {
  const qrScannerProps = useQrScanner({
    onDecode,
    onError,
    readerOptions,
  });
  const { isScanning, toggleScanning, toggleTorch, canUseTorch, videoElement } = qrScannerProps;

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
  } = useComponentStyle(qrScannerComponentMap, rest, iStyle, qrScannerStyle);

  return (
    <Container iStyle={mainContainerStyle}>
      <Container iStyle={qrScannerContainerStyle}>
        <Container iStyle={topLeftQRCornerStyle} />
        <Container iStyle={topRightQRCornerStyle} />
        <Container iStyle={bottomLeftQRCornerStyle} />
        <Container iStyle={bottomRightQRCornerStyle} />
        {!isScanning && <Icon iStyle={placeholderIconStyle} icon={faQrcode} />}
        <Container iStyle={videoStyle} as='video' ref={videoElement} />
      </Container>
      <Container iStyle={buttonsContainerStyle}>
        <IconButton iStyle={toggleScanningButtonStyle} onClick={toggleScanning} icon={faQrcode} />
        {canUseTorch && <IconButton iStyle={toggleTorchButtonStyle} onClick={toggleTorch} icon={faLightbulb} />}
      </Container>
    </Container>
  );
};

export { QRScanner };
