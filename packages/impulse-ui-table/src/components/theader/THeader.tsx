import { extractCssProps } from '@impulse-ui/core';
import { FunctionComponent } from 'react';

import { THeaderProps } from '../../types';
import { BaseTHeader } from './BaseTHeader.styles.tsx';

const THeader: FunctionComponent<THeaderProps> = ({ iStyle, ...rest }) => {
  const { cssProps, componentProps } = extractCssProps(rest);

  return <BaseTHeader $iStyle={iStyle} $cssProps={cssProps} {...componentProps} />;
};

export { THeader };
