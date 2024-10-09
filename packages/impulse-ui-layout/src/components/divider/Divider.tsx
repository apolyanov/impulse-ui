import { extractCssProps } from '@impulse-ui/core';
import { FunctionComponent } from 'react';
import { DividerProps } from '../../types';

import { BaseDivider } from '../divider';

const Divider: FunctionComponent<DividerProps> = ({ iCss, iTheme, ...rest }) => {
  const { cssProps, componentProps } = extractCssProps(rest);

  return <BaseDivider $iCss={iCss} $iTheme={iTheme} $cssProps={cssProps} {...componentProps} />;
};

export { Divider };
