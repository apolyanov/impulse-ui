import React, { FunctionComponent } from 'react';

import { Button } from '../../buttons';
import { Icon } from '../../icon';
import { Typography } from '../../text';
import { useSidebarHeaderStyle } from '../../utils';
import { SidebarHeaderProps } from '../types';

const SidebarHeader: FunctionComponent<SidebarHeaderProps> = ({ iStyle, iProps, ...rest }) => {
  const { onClick, icon, headerText } = rest;
  const { buttonStyle, iconStyle, typographyStyle, buttonStyleProps, iconStyleProps, typographyStyleProps } =
    useSidebarHeaderStyle(rest, iStyle, iProps);

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
