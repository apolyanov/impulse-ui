import { extractCssProps, polymorphicForwardRef } from '@impulse-ui/core';
import { SpinnerLoaderProps } from '../../types';
import { PropsWithChildren } from 'react';

import BaseSpinner from './BaseSpinner.styles';

const Spinner = polymorphicForwardRef<'div', PropsWithChildren<SpinnerLoaderProps>>(({ iStyle, ...rest }, ref) => (
  <BaseSpinner data-component='spinner' ref={ref} $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />
));

export { Spinner };
