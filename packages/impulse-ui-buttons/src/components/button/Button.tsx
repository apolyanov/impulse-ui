import { extractCssProps, polymorphicForwardRef, useComponentStyle } from '@impulse-ui/core';
import { Spinner } from '@impulse-ui/loader';
import { PropsWithChildren } from 'react';
import { ButtonProps } from '../../types';

import { buttonComponentMap } from '../../maps';
import { button } from '../../styles';

import { BaseButton } from './BaseButton.styles';

const Button = polymorphicForwardRef<'button', PropsWithChildren<ButtonProps>>(({ iStyle, ...rest }, ref) => {
  const { cssProps, componentProps } = extractCssProps(rest);
  const { loading, children, ...buttonProps } = componentProps;

  const { buttonStyle, loaderStyle } = useComponentStyle(buttonComponentMap, rest, button, iStyle);

  return (
    <BaseButton ref={ref} $iCss={buttonStyle?.iCss} $iTheme={buttonStyle?.iTheme} $cssProps={cssProps} {...buttonProps}>
      {loading ? <Spinner data-disabled={componentProps.disabled} {...loaderStyle} /> : children}
    </BaseButton>
  );
});

Button.toString = () => BaseButton.styledComponentId;

export { Button };
