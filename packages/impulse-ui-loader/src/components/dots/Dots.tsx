import { extractCssProps, polymorphicForwardRef } from '@impulse-ui/core';
import { PropsWithChildren } from 'react';
import { SpinnerLoaderProps } from '../../types';
import { BaseDots } from './BaseDots.styles.tsx';

const Dots = polymorphicForwardRef<'div', PropsWithChildren<SpinnerLoaderProps>>(({ iStyle, ...rest }, ref) => {
  const { cssProps, componentProps } = extractCssProps(rest);

  return <BaseDots data-component='dots' ref={ref} $iStyle={iStyle} $cssProps={cssProps} {...componentProps} />;
});

export { Dots };
