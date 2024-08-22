import { extractCssProps } from '@impulse-ui/core';
import { FunctionComponent } from 'react';
import { LinkProps } from '../../types';

import { BaseLink } from './BaseLink.styles';

const Link: FunctionComponent<LinkProps> = ({ iStyle, ...rest }) => {
  return <BaseLink $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { Link };
