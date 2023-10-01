import React, { FunctionComponent } from 'react';

import BaseIcon from './BaseIcon.styles';
import { IIconProps } from './types';

const Icon: FunctionComponent<IIconProps> = ({ icon, iStyle, iProps, parentProps }) => {
  return <BaseIcon $parentProps={parentProps} icon={icon} $iStyle={iStyle} $iProps={iProps} />;
};

export { Icon };
