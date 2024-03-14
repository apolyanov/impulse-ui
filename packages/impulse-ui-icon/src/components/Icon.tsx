'use client';
import React, { FunctionComponent } from 'react';
import { IconProps } from '@impulse-ui/types';

import BaseIcon from './BaseIcon.styles';

const Icon: FunctionComponent<IconProps> = ({ icon, iStyle, ...rest }) => {
  return <BaseIcon icon={icon} $iStyle={iStyle} {...rest} />;
};

export { Icon };
