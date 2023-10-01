import React, { FunctionComponent } from 'react';
import { Icon } from '@impulse-ui/icon';
import { Container } from '@impulse-ui/layout';
import { FieldMessageProps, FieldMessageType } from '@impulse-ui/types';

import { useFieldMessageStyle } from '../../hooks';
import { Typography } from '../typography';

const FieldMessage: FunctionComponent<FieldMessageProps> = ({ iStyle, iProps, ...rest }) => {
  const { type = FieldMessageType.INFO, icon, message } = rest;

  const {
    mainContainerStyle,
    iconStyle,
    typographyStyle,
    mainContainerStyleProps,
    iconStyleProps,
    typographyStyleProps,
    getFieldMessageIcon,
  } = useFieldMessageStyle(rest, iStyle, iProps);

  return (
    <Container iProps={mainContainerStyleProps} iStyle={mainContainerStyle}>
      <Icon iProps={iconStyleProps} iStyle={iconStyle} icon={getFieldMessageIcon(type, icon)} />
      <Typography iProps={typographyStyleProps} iStyle={typographyStyle}>
        {message}
      </Typography>
    </Container>
  );
};

export { FieldMessage };
