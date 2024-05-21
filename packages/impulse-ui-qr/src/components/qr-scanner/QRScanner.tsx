import React from 'react';
import { faLightbulb, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@impulse-ui/buttons';
import { useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Container } from '@impulse-ui/layout';
import { useQrScanner } from '@impulse-ui/qr-core';
import { QRScannerProps } from '@impulse-ui/types';

import { qrScannerComponentMap } from '../../maps';
import { qrScannerStyle } from '../../styles';

const QRScanner = ({ iStyle, ...rest }: QRScannerProps) => {
  const qrScannerProps = useQrScanner(rest);
  const { isScanning, toggleScanning, toggleTorch, canUseTorch, videoElement } = qrScannerProps;
  const stylesProps = { ...rest, ...qrScannerProps };

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
    <>
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
      {/* <Container iStyle={{ iCss: { margin: 8 } }} id='preview' as='canvas' width={1280} height={1280} />*/}
    </>
  );
};

export { QRScanner };
