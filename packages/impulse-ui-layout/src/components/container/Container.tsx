import { extractCssProps, polymorphicForwardRef } from '@impulse-ui/core';
import { ContainerProps } from '../../types';
import { PropsWithChildren } from 'react';

import { BaseContainer } from '../container';

const Container = polymorphicForwardRef<'div', PropsWithChildren<ContainerProps>>(({ iStyle, ...rest }, ref) => (
  <BaseContainer ref={ref} $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />
));

export { Container };
