import React, { FunctionComponent } from 'react';
import { THeaderProps } from '@impulse-ui/types';

import { BaseTHeader } from './BaseTHeader.styles';

const THeader: FunctionComponent<THeaderProps> = ({ iStyle, iProps, parentProps, ...rest }) => {
  return <BaseTHeader $iStyle={iStyle} $iProps={iProps} $parentProps={parentProps} {...rest} />;
};

export { THeader };
