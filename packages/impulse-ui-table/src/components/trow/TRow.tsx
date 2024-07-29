import { extractCssProps } from '@impulse-ui/core';
import { TRowProps } from '@impulse-ui/types';
import { FunctionComponent } from 'react';

import { BaseTRow } from './BaseTRow.styles';

const TRow: FunctionComponent<TRowProps> = ({ iStyle, ...rest }) => {
  return <BaseTRow $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { TRow };
