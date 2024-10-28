import { classnames, extractCssProps, polymorphicForwardRef, useStyle } from '@impulse-ui/core';
import { Spinner } from '@impulse-ui/loader';
import { PropsWithChildren } from 'react';
import { ButtonProps } from '../../types';

import { button } from '../../styles';

import { BaseButton } from './BaseButton.styles';

const Button = polymorphicForwardRef<'button', PropsWithChildren<ButtonProps>>(({ iCss, iTheme, ...rest }, ref) => {
  const { cssProps, componentProps } = extractCssProps(rest);
  const { loading, children, ...buttonProps } = componentProps;
  const className = classnames('IMUI-IButton', componentProps.className);
  const iStyle = useStyle(rest, button, iCss, iTheme);

  return (
    <BaseButton
      ref={ref}
      $iCss={iStyle?.iCss}
      $iTheme={iStyle?.iTheme}
      $cssProps={cssProps}
      {...buttonProps}
      className={className}
    >
      {loading ? <Spinner data-disabled={componentProps.disabled} /> : children}
    </BaseButton>
  );
});

Button.toString = () => BaseButton.styledComponentId;

export { Button };
