import { extractCssProps } from '@impulse-ui/core';
import { FunctionComponent } from 'react';

import { TDataProps } from '../../types';
import { BaseTData } from './BaseTData.styles.tsx';

const TData: FunctionComponent<TDataProps> = ({ iStyle, ...rest }) => {
  const { cssProps, componentProps } = extractCssProps(rest);

  return <BaseTData $iStyle={iStyle} $cssProps={cssProps} {...componentProps} />;
};

export { TData };
