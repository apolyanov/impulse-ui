import { extractCssProps, polymorphicForwardRef } from '@impulse-ui/core';
import { PropsWithChildren } from 'react';
import { ContainerProps } from '../../types';

import { BaseContainer } from '../container';

const Container = polymorphicForwardRef<'div', PropsWithChildren<ContainerProps>>(({ iStyle, ...rest }, ref) => {
  const { cssProps, componentProps } = extractCssProps(rest);

  return <BaseContainer ref={ref} $iStyle={iStyle} $cssProps={cssProps} {...componentProps} />;
});

export { Container };
