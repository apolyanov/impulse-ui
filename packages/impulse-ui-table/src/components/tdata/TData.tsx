import { extractCssProps, useStyle } from '@impulse-ui/core';

import { TDataProps } from '../../types';
import { BaseTData } from './BaseTData.styles.tsx';
import { useImpulseTable } from '../../hooks';

const TData = ({ iCss, iTheme, ...rest }: TDataProps) => {
  const { cssProps, componentProps } = extractCssProps(rest);
  const tableProps = useImpulseTable();
  const iStyle = useStyle({ tableProps, ...rest }, {}, iCss, iTheme);

  return (
    <BaseTData
      $iCss={iStyle?.iCss}
      $iTheme={iStyle?.iTheme}
      $cssProps={cssProps}
      $tableProps={tableProps}
      {...componentProps}
    />
  );
};

export { TData };
