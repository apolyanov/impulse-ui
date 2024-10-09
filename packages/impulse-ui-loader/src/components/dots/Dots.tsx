import { extractCssProps, polymorphicForwardRef } from '@impulse-ui/core';
import { PropsWithChildren } from 'react';
import { SpinnerLoaderProps } from '../../types';
import { BaseDots } from './BaseDots.styles.tsx';

const Dots = polymorphicForwardRef<'div', PropsWithChildren<SpinnerLoaderProps>>(({ iCss, iTheme, ...rest }, ref) => {
  const { cssProps, componentProps } = extractCssProps(rest);

  return (
    <BaseDots data-component='dots' ref={ref} $iCss={iCss} $iTheme={iTheme} $cssProps={cssProps} {...componentProps} />
  );
});

export { Dots };
