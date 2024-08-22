import { extractCssProps } from '@impulse-ui/core';
import { FunctionComponent } from 'react';

import { TDataProps } from '../../types';
import { BaseTData } from './BaseTData.styles';

const TData: FunctionComponent<TDataProps> = ({ iStyle, ...rest }) => {
  return <BaseTData $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { TData };
