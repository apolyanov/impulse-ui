import { extractCssProps, polymorphicForwardRef, useComponentStyle } from '@impulse-ui/core';
import { Spinner } from '@impulse-ui/loader';
import { PropsWithChildren } from 'react';
import { TextButtonProps } from '../../types';

import { textButtonComponentMap } from '../../maps';
import { textButton } from '../../styles';

import { BaseTextButton } from './BaseTextButton.styles';

const TextButton = polymorphicForwardRef<'button', PropsWithChildren<TextButtonProps>>(({ iStyle, ...rest }, ref) => {
  const { children, loading, ...buttonProps } = rest;
  const { buttonStyle, loaderStyle } = useComponentStyle(textButtonComponentMap, rest, textButton, iStyle);

  return (
    <BaseTextButton ref={ref} $iStyle={buttonStyle} $cssProps={extractCssProps(buttonProps)} {...buttonProps}>
      {loading ? <Spinner data-disabled={buttonProps.disabled} iStyle={loaderStyle} /> : children}
    </BaseTextButton>
  );
});

export { TextButton };
