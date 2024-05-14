import React, { PropsWithChildren } from 'react';
import { polymorphicForwardRef } from '@impulse-ui/core';
import { SpinnerLoaderProps } from '@impulse-ui/types';

import BaseSpinner from './BaseSpinner.styles';

const Spinner = polymorphicForwardRef<'div', PropsWithChildren<SpinnerLoaderProps>>(({ iStyle, ...rest }, ref) => (
  <BaseSpinner data-component='spinner' ref={ref} $iStyle={iStyle} {...rest} />
));

export { Spinner };
