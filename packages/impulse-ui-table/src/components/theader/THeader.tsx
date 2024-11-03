import { extractCssProps, useStyle } from '@impulse-ui/core';

import { THeaderProps } from '../../types';
import { BaseTHeader } from './BaseTHeader.styles.tsx';
import { useImpulseTable } from '../../hooks';

const THeader = ({ iCss, iTheme, ...rest }: THeaderProps) => {
  const { cssProps, componentProps } = extractCssProps(rest);
  const tableProps = useImpulseTable();
  const iStyle = useStyle({ tableProps, ...rest }, undefined, iCss, iTheme);

  return (
    <BaseTHeader
      $iCss={iStyle?.iCss}
      $iTheme={iStyle?.iTheme}
      $tableProps={tableProps}
      $cssProps={cssProps}
      {...componentProps}
    />
  );
};

export { THeader };
