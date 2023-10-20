import React, { FunctionComponent } from 'react';
import { TBodyProps } from '@impulse-ui/types';

import { BaseTBody } from './BaseTBody.styles';

const TBody: FunctionComponent<TBodyProps> = ({ iStyle, iProps, parentProps, ...rest }) => {
  return <BaseTBody $iStyle={iStyle} $iProps={iProps} $parentProps={parentProps} {...rest} />;
};

export { TBody };
