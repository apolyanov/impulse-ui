import React, { FunctionComponent } from 'react';

import { Button } from '../../buttons';
import { Icon } from '../../icon';
import { Typography } from '../../text';
import { useSidebarItemStyle } from '../../utils';
import { SidebarIteiProps } from '../types';

const SidebarItem: FunctionComponent<SidebarIteiProps> = ({ iStyle, iProps, ...rest }) => {
  const { itemText, onClick, icon } = rest;
  const { buttonStyle, iconStyle, typographyStyle, buttonStyleProps, iconStyleProps, typographyStyleProps } =
    useSidebarItemStyle(rest, iStyle, iProps);

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
