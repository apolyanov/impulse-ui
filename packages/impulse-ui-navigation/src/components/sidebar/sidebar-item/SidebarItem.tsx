import { BaseButton } from '@impulse-ui/buttons';
import { useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { FunctionComponent, PropsWithChildren } from 'react';

import { sidebarItemComponentMap } from '../../../maps';
import { defaultSidebarItemStyle } from '../../../styles';
import { SidebarItemProps } from '../../../types';

const SidebarItem: FunctionComponent<PropsWithChildren<SidebarItemProps>> = ({ iStyle, ...rest }) => {
  const { label, onClick, icon, collapsed } = rest;
  const { buttonStyle, iconStyle } = useComponentStyle(sidebarItemComponentMap, rest, defaultSidebarItemStyle, iStyle);

  return (
    <BaseButton onClick={onClick} $iCss={buttonStyle?.iCss} $iTheme={buttonStyle?.iTheme}>
      {icon && <Icon icon={icon} iCss={iconStyle.iCss} iTheme={iconStyle.iTheme} />}
      {!collapsed && label}
    </BaseButton>
  );
};

export { SidebarItem };
