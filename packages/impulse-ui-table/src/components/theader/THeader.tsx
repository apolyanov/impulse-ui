import { extractCssProps } from '@impulse-ui/core';
import { FunctionComponent } from 'react';

import { THeaderProps } from '../../types';
import { BaseTHeader } from './BaseTHeader.styles';

const THeader: FunctionComponent<THeaderProps> = ({ iStyle, ...rest }) => {
  return <BaseTHeader $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { THeader };
