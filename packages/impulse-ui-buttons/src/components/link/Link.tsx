import { extractCssProps, polymorphicForwardRef } from '@impulse-ui/core';
import { PropsWithChildren } from 'react';
import { LinkProps } from '../../types';

import { BaseLink } from './BaseLink.styles';

const Link = polymorphicForwardRef<'a', PropsWithChildren<LinkProps>>(({ iStyle, ...rest }, ref) => {
  const { cssProps, componentProps } = extractCssProps(rest);

  return <BaseLink ref={ref} $iCss={iStyle?.iCss} $iTheme={iStyle?.iTheme} $cssProps={cssProps} {...componentProps} />;
});

export { Link };
