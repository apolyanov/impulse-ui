import { extractCssProps, polymorphicForwardRef } from '@impulse-ui/core';
import { PropsWithChildren } from 'react';
import { ContainerProps } from '../../types';

import { BaseContainer } from '../container';

const Container = polymorphicForwardRef<'div', PropsWithChildren<ContainerProps>>(({ iStyle, ...rest }, ref) => {
  const { cssProps, componentProps } = extractCssProps(rest);

  return (
    <BaseContainer ref={ref} $iCss={iStyle?.iCss} $iTheme={iStyle?.iTheme} $cssProps={cssProps} {...componentProps} />
  );
});

export { Container };
