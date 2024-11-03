import { classnames, extractCssProps, polymorphicForwardRef } from '@impulse-ui/core';
import { IconProps } from '../types';
import { BaseIcon } from '../components';

const Icon = polymorphicForwardRef<'svg', IconProps>(({ icon, iCss, iTheme, ...rest }, ref) => {
  const { cssProps, componentProps } = extractCssProps(rest);
  const className = classnames('IMUI-Icon', componentProps.className);

  return (
    <BaseIcon
      ref={ref}
      icon={icon}
      $iCss={iCss}
      $iTheme={iTheme}
      $cssProps={cssProps}
      {...componentProps}
      className={className}
    />
  );
});

Icon.toString = () => BaseIcon.styledComponentId;

export { Icon };
