import React, { FunctionComponent } from 'react';
import { TFootProps } from '@impulse-ui/types';

import { BaseTFoot } from './BaseTFoot.styles';

const TFoot: FunctionComponent<TFootProps> = ({ iStyle, iProps, parentProps, ...rest }) => {
  return <BaseTFoot $iStyle={iStyle} $iProps={iProps} $parentProps={parentProps} {...rest} />;
};

export { TFoot };
