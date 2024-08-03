import { extractCssProps } from '@impulse-ui/core';
import { FunctionComponent } from 'react';

import { BaseTRow } from './BaseTRow.styles';
import { TRowProps } from '../../types';

const TRow: FunctionComponent<TRowProps> = ({ iStyle, ...rest }) => {
  return <BaseTRow $iStyle={iStyle} $cssProps={extractCssProps(rest)} {...rest} />;
};

export { TRow };
