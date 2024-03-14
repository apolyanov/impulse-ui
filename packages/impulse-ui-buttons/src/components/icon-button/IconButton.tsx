'use client';
import React from 'react';
import { FunctionComponent } from 'react';
import { useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { IconButtonProps } from '@impulse-ui/types';

import { iconButtonComponentMap } from '../../maps';
import { defaultIconButtonStyle } from '../../styles';
import { Button } from '../button';

const IconButton: FunctionComponent<IconButtonProps> = ({ iStyle, ...rest }) => {
  const { icon, ...buttonProps } = rest;

  const { buttonStyle, iconStyle } = useComponentStyle(iconButtonComponentMap, rest, defaultIconButtonStyle, iStyle);

  return (
    <Button iStyle={buttonStyle} {...buttonProps}>
      <Icon icon={icon} iStyle={iconStyle} />
    </Button>
  );
};

export { IconButton };
