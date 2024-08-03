import { extractCssProps, polymorphicForwardRef } from '@impulse-ui/core';
import { TypographyProps } from '../../types';
import { PropsWithChildren } from 'react';

import BaseTypography from './BaseTypography.styles';

const Typography = polymorphicForwardRef<'p', PropsWithChildren<TypographyProps>>(({ iStyle, ...rest }, ref) => (
  <BaseTypography ref={ref} $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />
));

export { Typography };
