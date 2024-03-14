'use client';
import React, { FunctionComponent } from 'react';
import { Icon } from '@impulse-ui/icon';
import { Container } from '@impulse-ui/layout';
import { FieldMessageProps } from '@impulse-ui/types';

import { useFieldMessageStyle } from '../../hooks';
import { INFO } from '../../utils';
import { Typography } from '../typography';

const FieldMessage: FunctionComponent<FieldMessageProps> = ({ iStyle, ...rest }) => {
  const { type = INFO, icon, message } = rest;

  const { mainContainerStyle, iconStyle, typographyStyle, getFieldMessageIcon } = useFieldMessageStyle(rest, iStyle);

  return (
    <Container iStyle={mainContainerStyle}>
      <Icon iStyle={iconStyle} icon={getFieldMessageIcon(type, icon)} />
      <Typography iStyle={typographyStyle}>{message}</Typography>
    </Container>
  );
};

export { FieldMessage };
