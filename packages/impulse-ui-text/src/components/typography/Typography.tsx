'use client';
import React, { PropsWithChildren } from 'react';
import { polymorphicForwardRef } from '@impulse-ui/core';
import { TypographyProps } from '@impulse-ui/types';

import BaseTypography from './BaseTypography.styles';

const Typography = polymorphicForwardRef<'p', PropsWithChildren<TypographyProps>>(({ iStyle, ...rest }, ref) => (
  <BaseTypography ref={ref} $iStyle={iStyle} {...rest} />
));

export { Typography };
