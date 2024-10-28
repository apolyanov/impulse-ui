import { classnames, extractCssProps, polymorphicForwardRef, useStyle } from '@impulse-ui/core';
import { Spinner } from '@impulse-ui/loader';
import { PropsWithChildren } from 'react';
import { TextButtonProps } from '../../types';

import { textButton } from '../../styles';

import { BaseTextButton } from './BaseTextButton.styles';

const TextButton = polymorphicForwardRef<'button', PropsWithChildren<TextButtonProps>>(
  ({ iCss, iTheme, ...rest }, ref) => {
    const { cssProps, componentProps } = extractCssProps(rest);
    const { loading, children, ...buttonProps } = componentProps;
    const className = classnames('IMUI-TextButton', componentProps.className);
    const iStyle = useStyle(rest, textButton, iCss, iTheme);

    return (
      <BaseTextButton
        ref={ref}
        $iCss={iStyle?.iCss}
        $iTheme={iStyle?.iTheme}
        $cssProps={cssProps}
        {...buttonProps}
        className={className}
      >
        {loading ? <Spinner data-disabled={componentProps.disabled} /> : children}
      </BaseTextButton>
    );
  },
);

TextButton.toString = () => BaseTextButton.styledComponentId;

export { TextButton };
