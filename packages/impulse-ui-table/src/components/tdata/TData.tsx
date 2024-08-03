import { extractCssProps } from '@impulse-ui/core';
import { FunctionComponent } from 'react';

import { BaseTData } from './BaseTData.styles';
import { TDataProps } from '../../types';

const TData: FunctionComponent<TDataProps> = ({ iStyle, ...rest }) => {
  return <BaseTData $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { TData };
