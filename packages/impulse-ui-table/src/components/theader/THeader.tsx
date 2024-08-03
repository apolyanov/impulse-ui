import { extractCssProps } from '@impulse-ui/core';
import { FunctionComponent } from 'react';

import { BaseTHeader } from './BaseTHeader.styles';
import { THeaderProps } from '../../types';

const THeader: FunctionComponent<THeaderProps> = ({ iStyle, ...rest }) => {
  return <BaseTHeader $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { THeader };
