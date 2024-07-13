import { extractCssProps, polymorphicForwardRef } from '@impulse-ui/core';
import { SpinnerLoaderProps } from '@impulse-ui/types';
import React, { PropsWithChildren } from 'react';

import BaseSpinner from './BaseSpinner.styles';

const Spinner = polymorphicForwardRef<'div', PropsWithChildren<SpinnerLoaderProps>>(({ iStyle, ...rest }, ref) => (
  <BaseSpinner data-component='spinner' ref={ref} $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />
));

export { Spinner };
