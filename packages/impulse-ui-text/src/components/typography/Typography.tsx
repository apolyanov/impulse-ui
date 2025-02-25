import { extractCssProps, polymorphicForwardRef } from '@impulse-ui/core';
import { PropsWithChildren } from 'react';
import { TypographyProps } from '../../types';

import BaseTypography from './BaseTypography.styles';

const Typography = polymorphicForwardRef<'p', PropsWithChildren<TypographyProps>>(({ iStyle, ...rest }, ref) => {
  const { cssProps, componentProps } = extractCssProps(rest);

  return <BaseTypography ref={ref} $iStyle={iStyle} $cssProps={cssProps} {...componentProps} />;
});

export { Typography };
