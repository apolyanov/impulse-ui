'use client';
import React, { FunctionComponent, PropsWithChildren } from 'react';
import { BaseButton } from '@impulse-ui/buttons';
import { useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Typography } from '@impulse-ui/text';
import { SidebarHeaderProps } from '@impulse-ui/types';

import { sidebarHeaderComponentMap } from '../../../maps';
import { defaultSidebarHeaderStyle } from '../../../styles';

const SidebarHeader: FunctionComponent<PropsWithChildren<SidebarHeaderProps>> = ({ iStyle, ...rest }) => {
  const { onClick, icon, headerText } = rest;
  const { buttonStyle, iconStyle, typographyStyle } = useComponentStyle(
    sidebarHeaderComponentMap,
    rest,
    defaultSidebarHeaderStyle,
    iStyle,
  );

  return (
    <BaseButton onClick={onClick} $iStyle={buttonStyle}>
      {icon && <Icon icon={icon} iStyle={iconStyle} />}
      <Typography iStyle={typographyStyle}>{headerText}</Typography>
    </BaseButton>
  );
};

export { SidebarHeader };
