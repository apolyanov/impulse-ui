import React, { FunctionComponent } from 'react';
import { IconProps } from '@impulse-ui/types';

import BaseIcon from './BaseIcon.styles';

const Icon: FunctionComponent<IconProps> = ({ icon, iStyle, iProps, parentProps }) => {
  return <BaseIcon $parentProps={parentProps} icon={icon} $iStyle={iStyle} $iProps={iProps} />;
};

export { Icon };
