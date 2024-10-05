import { extractCssProps } from '@impulse-ui/core';
import { FunctionComponent } from 'react';

import { TRowProps } from '../../types';
import { BaseTRow } from './BaseTRow.styles.tsx';

const TRow: FunctionComponent<TRowProps> = ({ iStyle, ...rest }) => {
  const { cssProps, componentProps } = extractCssProps(rest);

  return <BaseTRow $iStyle={iStyle} $cssProps={cssProps} {...componentProps} />;
};

export { TRow };
