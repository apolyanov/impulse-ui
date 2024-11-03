import { BaseButton } from '@impulse-ui/buttons';
import { useStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { FunctionComponent, PropsWithChildren } from 'react';

import { defaultSidebarItemStyle } from '../../../styles';
import { SidebarItemProps } from '../../../types';

const SidebarItem: FunctionComponent<PropsWithChildren<SidebarItemProps>> = ({ iCss, iTheme, ...rest }) => {
  const { label, onClick, icon, collapsed } = rest;
  const iStyle = useStyle(rest, defaultSidebarItemStyle, iCss, iTheme);

  return (
    <BaseButton onClick={onClick} $iCss={iStyle?.iCss} $iTheme={iStyle?.iTheme}>
      {icon && <Icon icon={icon} />}
      {!collapsed && label}
    </BaseButton>
  );
};

export { SidebarItem };
