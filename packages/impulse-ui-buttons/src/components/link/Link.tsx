import { classnames, extractCssProps, polymorphicForwardRef } from '@impulse-ui/core';
import { PropsWithChildren } from 'react';
import { LinkProps } from '../../types';

import { BaseLink } from './BaseLink.styles';

const Link = polymorphicForwardRef<'a', PropsWithChildren<LinkProps>>(({ iCss, iTheme, ...rest }, ref) => {
  const { cssProps, componentProps } = extractCssProps(rest);
  const className = classnames('IMUI-Link', componentProps.className);

  return (
    <BaseLink ref={ref} $iCss={iCss} $iTheme={iTheme} $cssProps={cssProps} {...componentProps} className={className} />
  );
});

Link.toString = () => BaseLink.styledComponentId;

export { Link };
