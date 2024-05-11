'use client';
import React, { FunctionComponent, PropsWithChildren } from 'react';
import { BaseButton } from '@impulse-ui/buttons';
import { useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Typography } from '@impulse-ui/text';
import { SidebarItemProps } from '@impulse-ui/types';

import { sidebarItemComponentMap } from '../../../maps';
import { defaultSidebarItemStyle } from '../../../styles';

const SidebarItem: FunctionComponent<PropsWithChildren<SidebarItemProps>> = ({ iStyle, ...rest }) => {
  const { itemText, onClick, icon } = rest;
  const { buttonStyle, iconStyle, typographyStyle } = useComponentStyle(
    sidebarItemComponentMap,
    rest,
    defaultSidebarItemStyle,
    iStyle,
  );

  return (
    <BaseButton onClick={onClick} $iStyle={buttonStyle}>
      {icon && <Icon icon={icon} iStyle={iconStyle} />}
      <Typography iStyle={typographyStyle}>{itemText}</Typography>
    </BaseButton>
  );
};

export { SidebarItem };
