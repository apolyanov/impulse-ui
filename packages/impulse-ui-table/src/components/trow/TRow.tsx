import { extractCssProps } from '@impulse-ui/core';
import { FunctionComponent } from 'react';

import { TRowProps } from '../../types';
import { BaseTRow } from './BaseTRow.styles';

const TRow: FunctionComponent<TRowProps> = ({ iStyle, ...rest }) => {
  return <BaseTRow $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { TRow };
