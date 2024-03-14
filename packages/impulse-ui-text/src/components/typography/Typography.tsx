'use client';
import React, { FunctionComponent } from 'react';
import { TypographyProps } from '@impulse-ui/types';

import BaseTypography from './BaseTypography.styles';

const Typography: FunctionComponent<TypographyProps> = ({ iStyle, ...rest }) => {
  return <BaseTypography $iStyle={iStyle} {...rest} />;
};

export { Typography };
