import React, { FunctionComponent } from 'react';
import { TRowProps } from '@impulse-ui/types';

import { BaseTRow } from './BaseTRow.styles';

const TRow: FunctionComponent<TRowProps> = ({ iProps, iStyle, parentProps, ...rest }) => {
  return <BaseTRow $iStyle={iStyle} $iProps={iProps} $parentProps={parentProps} {...rest} />;
};

export { TRow };
