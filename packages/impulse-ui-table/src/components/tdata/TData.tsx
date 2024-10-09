import { extractCssProps } from '@impulse-ui/core';
import { FunctionComponent } from 'react';

import { TDataProps } from '../../types';
import { BaseTData } from './BaseTData.styles.tsx';

const TData: FunctionComponent<TDataProps> = ({ iCss, iTheme, ...rest }) => {
  const { cssProps, componentProps } = extractCssProps(rest);

  return <BaseTData $iCss={iCss} $iTheme={iTheme} $cssProps={cssProps} {...componentProps} />;
};

export { TData };
