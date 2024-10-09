import { extractCssProps, polymorphicForwardRef } from '@impulse-ui/core';
import { IconProps } from '../types';
import { BaseIcon } from '../components';

const Icon = polymorphicForwardRef<'svg', IconProps>(({ icon, iCss, iTheme, ...rest }, ref) => {
  const { cssProps, componentProps } = extractCssProps(rest);

  return <BaseIcon ref={ref} icon={icon} $iCss={iCss} $iTheme={iTheme} $cssProps={cssProps} {...componentProps} />;
});

export { Icon };
