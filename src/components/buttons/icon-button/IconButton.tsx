import React from 'react';
import { FunctionComponent } from 'react';

import { Icon } from '../../icon';
import { useComponentStyle } from '../../utils';
import { Button } from '../button';
import { IconButtonProps } from '../types';

import { defaultIconButtonStyle } from './defaultIconButton.styles';
import { iconButtonComponentMap } from './theme.map';

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
