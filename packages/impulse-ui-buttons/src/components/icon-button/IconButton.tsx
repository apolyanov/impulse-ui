import { extractCssProps, polymorphicForwardRef, useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Spinner } from '@impulse-ui/loader';
import { PropsWithChildren } from 'react';
import { IconButtonProps } from '../../types';

import { iconButtonComponentMap } from '../../maps';
import { defaultIconButtonStyle } from '../../styles';
import { BaseButton } from '../button';

const IconButton = polymorphicForwardRef<'button', PropsWithChildren<IconButtonProps>>(({ iStyle, ...rest }, ref) => {
  const { cssProps, componentProps } = extractCssProps(rest);
  const { loading, children, icon, ...buttonProps } = componentProps;

  const { buttonStyle, iconStyle, loaderStyle } = useComponentStyle(
    iconButtonComponentMap,
    rest,
    defaultIconButtonStyle,
    iStyle,
  );

  return (
    <BaseButton ref={ref} $iCss={buttonStyle?.iCss} $iTheme={buttonStyle?.iTheme} $cssProps={cssProps} {...buttonProps}>
      {loading ? (
        <Spinner data-disabled={componentProps.disabled} {...loaderStyle} />
      ) : (
        <Icon data-disabled={componentProps.disabled} icon={icon} {...iconStyle} />
      )}
    </BaseButton>
  );
});

export { IconButton };
