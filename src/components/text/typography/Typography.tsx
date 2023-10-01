import React, { FunctionComponent } from 'react';

import { TypographyProps } from '../types';

import BaseTypography from './BaseTypography.styles';

const Typography: FunctionComponent<TypographyProps> = ({ iStyle, iProps, parentProps, ...rest }) => {
  return <BaseTypography $parentProps={parentProps} $iStyle={iStyle} $iProps={iProps} {...rest} />;
};

export { Typography };
