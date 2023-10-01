import React, { FunctionComponent } from 'react';

import { Icon } from '../../icon';
import { Container } from '../../layout';
import { useFieldMessageStyle } from '../../utils';
import { FieldMessageProps, FieldMessageType } from '../types';
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
