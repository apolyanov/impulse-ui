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
    <BaseButton ref={ref} $iStyle={buttonStyle} $cssProps={cssProps} {...buttonProps}>
      {loading ? <Spinner data-disabled={componentProps.disabled} iStyle={loaderStyle} /> : children}
    </BaseButton>
  );
});

export { Button };
