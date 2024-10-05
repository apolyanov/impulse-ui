import { extractCssProps } from '@impulse-ui/core';
import { FunctionComponent } from 'react';
import { DividerProps } from '../../types';

import { BaseDivider } from '../divider';

const Divider: FunctionComponent<DividerProps> = ({ iStyle, ...rest }) => {
  const { cssProps, componentProps } = extractCssProps(rest);

  return <BaseDivider $iStyle={iStyle} $cssProps={cssProps} {...componentProps} />;
};

export { Divider };
