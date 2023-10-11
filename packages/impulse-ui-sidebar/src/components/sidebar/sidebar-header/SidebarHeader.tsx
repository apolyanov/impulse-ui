import React, { FunctionComponent } from 'react';
import { Button } from '@impulse-ui/buttons';
import { useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Typography } from '@impulse-ui/text';
import { SidebarHeaderProps } from '@impulse-ui/types';

import { defaultSidebarHeaderStyle, defaultSidebarHeaderStyleProps } from '../../../styles';

import { sidebarHeaderComponentMap } from './theme.map';

const SidebarHeader: FunctionComponent<SidebarHeaderProps> = ({ iStyle, iProps, ...rest }) => {
  const { onClick, icon, headerText } = rest;
  const { buttonStyle, iconStyle, typographyStyle, buttonStyleProps, iconStyleProps, typographyStyleProps } =
    useComponentStyle(
      sidebarHeaderComponentMap,
      rest,
      defaultSidebarHeaderStyle,
      defaultSidebarHeaderStyleProps,
      iStyle,
      iProps,
    );

  return (
    <Button onClick={onClick} iStyle={buttonStyle} iProps={buttonStyleProps}>
      {icon && <Icon icon={icon} iStyle={iconStyle} iProps={iconStyleProps} />}
      <Typography iStyle={typographyStyle} iProps={typographyStyleProps}>
        {headerText}
      </Typography>
    </Button>
  );
};

export { SidebarHeader };
