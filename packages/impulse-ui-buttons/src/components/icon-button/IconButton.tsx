import React from 'react';
import { FunctionComponent } from 'react';
import { useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { IconButtonProps } from '@impulse-ui/types';

import { iconButtonComponentMap } from '../../maps';
import { defaultIconButtonStyle } from '../../styles';
import { Button } from '../button';

const IconButton: FunctionComponent<IconButtonProps> = ({ iStyle, iProps, ...rest }) => {
  const { icon, ...buttonProps } = rest;
  const { buttonStyle, iconStyle, buttonStyleProps, iconStyleProps } = useComponentStyle(
    iconButtonComponentMap,
    rest,
    defaultIconButtonStyle,
    undefined,
    iStyle,
    iProps,
  );

  return (
    <Button iStyle={buttonStyle} iProps={buttonStyleProps} {...buttonProps}>
      <Icon icon={icon} iStyle={iconStyle} iProps={iconStyleProps} />
    </Button>
  );
};

export { IconButton };
