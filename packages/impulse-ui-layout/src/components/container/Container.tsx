import { extractCssProps, polymorphicForwardRef } from '@impulse-ui/core';
import { PropsWithChildren } from 'react';
import { ContainerProps } from '../../types';

import { BaseContainer } from '../container';

const Container = polymorphicForwardRef<'div', PropsWithChildren<ContainerProps>>(({ iCss, iTheme, ...rest }, ref) => {
  const { cssProps, componentProps } = extractCssProps(rest);

  return <BaseContainer ref={ref} $iCss={iCss} $iTheme={iTheme} $cssProps={cssProps} {...componentProps} />;
});

Container.toString = () => BaseContainer.styledComponentId;

export { Container };
