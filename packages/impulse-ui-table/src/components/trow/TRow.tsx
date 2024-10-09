import { extractCssProps } from '@impulse-ui/core';
import { FunctionComponent } from 'react';

import { TRowProps } from '../../types';
import { BaseTRow } from './BaseTRow.styles.tsx';

const TRow: FunctionComponent<TRowProps> = ({ iCss, iTheme, ...rest }) => {
  const { cssProps, componentProps } = extractCssProps(rest);

  return <BaseTRow $iCss={iCss} $iTheme={iTheme} $cssProps={cssProps} {...componentProps} />;
};

export { TRow };
