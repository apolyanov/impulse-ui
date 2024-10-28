import { classnames, extractCssProps, polymorphicForwardRef } from '@impulse-ui/core';
import { PropsWithChildren } from 'react';
import { TypographyProps } from '../../types';

import BaseTypography from './BaseTypography.styles';

const Typography = polymorphicForwardRef<'p', PropsWithChildren<TypographyProps>>(({ iCss, iTheme, ...rest }, ref) => {
  const { cssProps, componentProps } = extractCssProps(rest);
  const className = classnames('IMUI-Typography', componentProps.className);

  return (
    <BaseTypography
      ref={ref}
      $iCss={iCss}
      $iTheme={iTheme}
      $cssProps={cssProps}
      {...componentProps}
      className={className}
    />
  );
});

Typography.toString = () => BaseTypography.styledComponentId;

export { Typography };
