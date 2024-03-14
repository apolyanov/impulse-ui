'use client';
import React, { FunctionComponent } from 'react';
import { TextButtonProps } from '@impulse-ui/types';

import BaseTextButton from './BaseTextButton.styles';

const TextButton: FunctionComponent<TextButtonProps> = ({ iStyle, ...rest }) => {
  return <BaseTextButton $iStyle={iStyle} {...rest} />;
};

export { TextButton };
