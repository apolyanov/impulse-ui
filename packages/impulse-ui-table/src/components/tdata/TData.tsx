import { extractCssProps } from '@impulse-ui/core';
import { TDataProps } from '@impulse-ui/types';
import { FunctionComponent } from 'react';

import { BaseTData } from './BaseTData.styles';

const TData: FunctionComponent<TDataProps> = ({ iStyle, ...rest }) => {
  return <BaseTData $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { TData };
