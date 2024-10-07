import { extractCssProps, polymorphicForwardRef } from '@impulse-ui/core';
import { PropsWithChildren } from 'react';
import { SpinnerLoaderProps } from '../../types';
import { BaseDots } from './BaseDots.styles.tsx';

const Dots = polymorphicForwardRef<'div', PropsWithChildren<SpinnerLoaderProps>>(({ iStyle, ...rest }, ref) => {
  const { cssProps, componentProps } = extractCssProps(rest);

  return (
    <BaseDots
      data-component='dots'
      ref={ref}
      $iCss={iStyle?.iCss}
      $iTheme={iStyle?.iTheme}
      $cssProps={cssProps}
      {...componentProps}
    />
  );
});

export { Dots };
