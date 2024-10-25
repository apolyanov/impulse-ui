import { extractCssProps, polymorphicForwardRef, useStyle } from '@impulse-ui/core';
import { Spinner } from '@impulse-ui/loader';
import { PropsWithChildren } from 'react';
import { TextButtonProps } from '../../types';

import { textButton } from '../../styles';

import { BaseTextButton } from './BaseTextButton.styles';

const TextButton = polymorphicForwardRef<'button', PropsWithChildren<TextButtonProps>>(
  ({ iCss, iTheme, ...rest }, ref) => {
    const { cssProps, componentProps } = extractCssProps(rest);
    const { loading, children, ...buttonProps } = componentProps;

    const iStyle = useStyle(rest, textButton, iCss, iTheme);

    return (
      <BaseTextButton ref={ref} $iCss={iStyle?.iCss} $iTheme={iStyle?.iTheme} $cssProps={cssProps} {...buttonProps}>
        {loading ? <Spinner data-disabled={componentProps.disabled} /> : children}
      </BaseTextButton>
    );
  },
);

TextButton.toString = () => BaseTextButton.styledComponentId;

export { TextButton };
