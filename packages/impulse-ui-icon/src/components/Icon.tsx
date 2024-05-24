'use client';
import React, { FunctionComponent } from 'react';
import { extractCssProps } from '@impulse-ui/core';
import { IconProps } from '@impulse-ui/types';

import BaseIcon from './BaseIcon.styles';

const Icon: FunctionComponent<IconProps> = ({ icon, iStyle, ...rest }) => {
  return <BaseIcon icon={icon} $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { Icon };
