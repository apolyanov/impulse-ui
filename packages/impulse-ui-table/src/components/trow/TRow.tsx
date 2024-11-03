import { extractCssProps, useStyle } from '@impulse-ui/core';

import { TRowProps } from '../../types';
import { BaseTRow } from './BaseTRow.styles.tsx';
import { useImpulseTable } from '../../hooks';

const TRow = ({ iCss, iTheme, ...rest }: TRowProps) => {
  const { cssProps, componentProps } = extractCssProps(rest);
  const tableProps = useImpulseTable();
  const iStyle = useStyle({ ...rest, tableProps }, undefined, iCss, iTheme);

  return (
    <BaseTRow
      $iCss={iStyle?.iCss}
      $iTheme={iStyle?.iTheme}
      $tableProps={tableProps}
      $cssProps={cssProps}
      {...componentProps}
    />
  );
};

export { TRow };
