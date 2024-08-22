import { extractCssProps, useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Spinner } from '@impulse-ui/loader';
import React from 'react';
import { FunctionComponent } from 'react';
import { IconButtonProps } from '../../types';

import { iconButtonComponentMap } from '../../maps';
import { defaultIconButtonStyle } from '../../styles';
import { BaseButton } from '../button';

const IconButton: FunctionComponent<IconButtonProps> = ({ iStyle, ...rest }) => {
  const { icon, loading, ...buttonProps } = rest;

  const { buttonStyle, iconStyle, loaderStyle } = useComponentStyle(
    iconButtonComponentMap,
    rest,
    defaultIconButtonStyle,
    iStyle,
  );

  return (
    <BaseButton $iStyle={buttonStyle} $cssProps={extractCssProps(buttonProps)} {...buttonProps}>
      {loading ? (
        <Spinner data-disabled={buttonProps.disabled} iStyle={loaderStyle} />
      ) : (
        <Icon data-disabled={buttonProps.disabled} icon={icon} iStyle={iconStyle} />
      )}
    </BaseButton>
  );
};

export { IconButton };
