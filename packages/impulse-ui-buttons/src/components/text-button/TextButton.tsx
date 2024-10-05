import { extractCssProps, polymorphicForwardRef, useComponentStyle } from '@impulse-ui/core';
import { Spinner } from '@impulse-ui/loader';
import { PropsWithChildren } from 'react';
import { TextButtonProps } from '../../types';

import { textButtonComponentMap } from '../../maps';
import { textButton } from '../../styles';

import { BaseTextButton } from './BaseTextButton.styles';

const TextButton = polymorphicForwardRef<'button', PropsWithChildren<TextButtonProps>>(({ iStyle, ...rest }, ref) => {
  const { cssProps, componentProps } = extractCssProps(rest);
  const { loading, children, ...buttonProps } = componentProps;

  const { buttonStyle, loaderStyle } = useComponentStyle(textButtonComponentMap, rest, textButton, iStyle);

  return (
    <BaseTextButton ref={ref} $iStyle={buttonStyle} $cssProps={cssProps} {...buttonProps}>
      {loading ? <Spinner data-disabled={componentProps.disabled} iStyle={loaderStyle} /> : children}
    </BaseTextButton>
  );
});

export { TextButton };
