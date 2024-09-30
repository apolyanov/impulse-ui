import { extractCssProps, polymorphicForwardRef, useComponentStyle } from '@impulse-ui/core';
import { Spinner } from '@impulse-ui/loader';
import { PropsWithChildren } from 'react';
import { ButtonProps } from '../../types';

import { buttonComponentMap } from '../../maps';
import { button } from '../../styles';

import { BaseButton } from './BaseButton.styles';

const Button = polymorphicForwardRef<'button', PropsWithChildren<ButtonProps>>(({ iStyle, ...rest }, ref) => {
  const { children, loading, ...buttonProps } = rest;
  const { buttonStyle, loaderStyle } = useComponentStyle(buttonComponentMap, rest, button, iStyle);

  return (
    <BaseButton ref={ref} $iStyle={buttonStyle} $cssProps={extractCssProps(buttonProps)} {...buttonProps}>
      {loading ? <Spinner data-disabled={buttonProps.disabled} iStyle={loaderStyle} /> : children}
    </BaseButton>
  );
});

export { Button };
