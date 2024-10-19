import { extractCssProps, polymorphicForwardRef } from '@impulse-ui/core';
import { PropsWithChildren } from 'react';
import { SpinnerLoaderProps } from '../../types';

import { BaseSpinner } from './BaseSpinner.styles';

const Spinner = polymorphicForwardRef<'div', PropsWithChildren<SpinnerLoaderProps>>(
  ({ iCss, iTheme, ...rest }, ref) => {
    const { cssProps, componentProps } = extractCssProps(rest);

    return (
      <BaseSpinner
        data-component='spinner'
        ref={ref}
        $iCss={iCss}
        $iTheme={iTheme}
        $cssProps={cssProps}
        {...componentProps}
      />
    );
  },
);

Spinner.toString = () => BaseSpinner.styledComponentId;

export { Spinner };
