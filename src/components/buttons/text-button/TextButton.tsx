import React, { FunctionComponent } from 'react';

import { TextButtonProps } from '../types';

import BaseTextButton from './BaseTextButton.styles';

const TextButton: FunctionComponent<TextButtonProps> = ({ iStyle, iProps, parentProps, ...rest }) => {
  return <BaseTextButton $parentProps={parentProps} $iStyle={iStyle} $iProps={iProps} {...rest} />;
};

export { TextButton };
