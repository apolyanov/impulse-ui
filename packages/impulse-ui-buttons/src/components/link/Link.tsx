'use client';
import React, { FunctionComponent } from 'react';
import { LinkProps } from '@impulse-ui/types';

import BaseLink from './BaseLink.styles';

const Link: FunctionComponent<LinkProps> = ({ iStyle, ...rest }) => {
  return <BaseLink $iStyle={iStyle} {...rest} />;
};

export { Link };
