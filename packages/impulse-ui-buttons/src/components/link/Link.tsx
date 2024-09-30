import { extractCssProps, polymorphicForwardRef } from '@impulse-ui/core';
import { PropsWithChildren } from 'react';
import { LinkProps } from '../../types';

import { BaseLink } from './BaseLink.styles';

const Link = polymorphicForwardRef<'a', PropsWithChildren<LinkProps>>(({ iStyle, ...rest }, ref) => {
  return <BaseLink ref={ref} $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
});

export { Link };
