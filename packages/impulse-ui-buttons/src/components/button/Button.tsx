import React, { FunctionComponent } from 'react';
import { ButtonProps } from '@impulse-ui/types';

import BaseButton from './BaseButton.styles';

const Button: FunctionComponent<ButtonProps> = ({ iStyle, iProps, parentProps, ...rest }) => {
  return <BaseButton $parentProps={parentProps} $iStyle={iStyle} $iProps={iProps} {...rest} />;
};

export { Button };
