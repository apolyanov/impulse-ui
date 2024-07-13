import { extractCssProps } from '@impulse-ui/core';
import { LinkProps } from '@impulse-ui/types';
import React, { FunctionComponent } from 'react';

import { BaseLink } from './BaseLink.styles';

const Link: FunctionComponent<LinkProps> = ({ iStyle, ...rest }) => {
  return <BaseLink $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { Link };
