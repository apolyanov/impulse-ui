import { extractCssProps } from '@impulse-ui/core';
import { LinkProps } from '../../types';
import { FunctionComponent } from 'react';

import { BaseLink } from './BaseLink.styles';

const Link: FunctionComponent<LinkProps> = ({ iStyle, ...rest }) => {
  return <BaseLink $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { Link };
