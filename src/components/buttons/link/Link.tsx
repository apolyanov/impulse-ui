import React, { FunctionComponent } from 'react';

import { LinkProps } from '../types';

import BaseLink from './BaseLink.styles';

const Link: FunctionComponent<LinkProps> = ({ iStyle, iProps, parentProps, ...rest }) => {
  return <BaseLink $parentProps={parentProps} $iStyle={iStyle} $iProps={iProps} {...rest} />;
};

export { Link };
