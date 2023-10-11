import React, { FunctionComponent } from 'react';
import { Button } from '@impulse-ui/buttons';
import { useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Typography } from '@impulse-ui/text';
import { SidebarItemProps } from '@impulse-ui/types';

import { defaultSidebarItemStyle, defaultSidebarItemStyleProps } from '../../../styles';

import { sidebarItemComponentMap } from './theme.map';

const SidebarItem: FunctionComponent<SidebarItemProps> = ({ iStyle, iProps, ...rest }) => {
  const { itemText, onClick, icon } = rest;
  const { buttonStyle, iconStyle, typographyStyle, buttonStyleProps, iconStyleProps, typographyStyleProps } =
    useComponentStyle(
      sidebarItemComponentMap,
      rest,
      defaultSidebarItemStyle,
      defaultSidebarItemStyleProps,
      iStyle,
      iProps,
    );

  return (
    <Button onClick={onClick} iStyle={buttonStyle} iProps={buttonStyleProps}>
      {icon && <Icon icon={icon} iStyle={iconStyle} iProps={iconStyleProps} />}
      <Typography iStyle={typographyStyle} iProps={typographyStyleProps}>
        {itemText}
      </Typography>
    </Button>
  );
};

export { SidebarItem };
