'use client';
import React, { FunctionComponent } from 'react';
import { ButtonProps } from '@impulse-ui/types';

import BaseButton from './BaseButton.styles';

const Button: FunctionComponent<ButtonProps> = ({ iStyle, ...rest }) => {
  return <BaseButton $iStyle={iStyle} {...rest} />;
};

export { Button };
