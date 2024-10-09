import { extractCssProps } from '@impulse-ui/core';
import { FunctionComponent } from 'react';

import { THeaderProps } from '../../types';
import { BaseTHeader } from './BaseTHeader.styles.tsx';

const THeader: FunctionComponent<THeaderProps> = ({ iCss, iTheme, ...rest }) => {
  const { cssProps, componentProps } = extractCssProps(rest);

  return <BaseTHeader $iCss={iCss} $iTheme={iTheme} $cssProps={cssProps} {...componentProps} />;
};

export { THeader };
