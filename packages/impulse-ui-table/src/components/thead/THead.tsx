import React, { FunctionComponent } from 'react';
import { THeadProps } from '@impulse-ui/types';

import { BaseTHead } from './BaseTHead.styles';

const THead: FunctionComponent<THeadProps> = ({ iStyle, iProps, parentProps, ...rest }) => {
  return <BaseTHead $iStyle={iStyle} $iProps={iProps} $parentProps={parentProps} {...rest} />;
};

export { THead };
