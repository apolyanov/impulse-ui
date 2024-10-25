import { extractCssProps, polymorphicForwardRef, useStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Spinner } from '@impulse-ui/loader';
import { PropsWithChildren } from 'react';
import { IconButtonProps } from '../../types';

import { defaultIconButtonStyle } from '../../styles';
import { BaseButton } from '../button';

const IconButton = polymorphicForwardRef<'button', PropsWithChildren<IconButtonProps>>(
  ({ iCss, iTheme, ...rest }, ref) => {
    const { cssProps, componentProps } = extractCssProps(rest);
    const { loading, children, icon, ...buttonProps } = componentProps;

    const iStyle = useStyle(rest, defaultIconButtonStyle, iCss, iTheme);

    return (
      <BaseButton ref={ref} $iCss={iStyle?.iCss} $iTheme={iStyle?.iTheme} $cssProps={cssProps} {...buttonProps}>
        {loading ? (
          <Spinner data-disabled={componentProps.disabled} />
        ) : (
          <Icon data-disabled={componentProps.disabled} icon={icon} />
        )}
      </BaseButton>
    );
  },
);

export { IconButton };
