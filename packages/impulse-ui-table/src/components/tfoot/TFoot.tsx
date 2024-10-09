import { extractCssProps, useComponentStyle } from '@impulse-ui/core';
import { flexRender } from '@tanstack/react-table';
import { Fragment, useMemo } from 'react';

import { useImpulseTable } from '../../hooks';
import { tfootComponentMap } from '../../maps';
import { TData } from '../tdata';
import { TRow } from '../trow';

import { TFootComponentProps } from '../../types';
import { BaseTFoot } from './BaseTFoot.styles.tsx';

const TFoot = <T extends object>({ iStyle, ...rest }: TFootComponentProps<T>) => {
  const tableState = useImpulseTable();
  const { getFooterGroups } = tableState;
  const { cssProps, componentProps } = extractCssProps(rest);
  const { tfootStyle, trowStyle, tdataStyle } = useComponentStyle(tfootComponentMap, tableState, undefined, iStyle);

  const shouldRenderFooter = useMemo(
    () =>
      getFooterGroups()
        .map((group) => group.headers.map((header) => header.column.columnDef.footer))
        .flat()
        .filter(Boolean).length > 0,
    [getFooterGroups],
  );

  return (
    <Fragment>
      {shouldRenderFooter && (
        <BaseTFoot $iStyle={tfootStyle} $cssProps={cssProps} {...componentProps}>
          {getFooterGroups().map((footerGroup) => (
            <TRow {...trowStyle} key={footerGroup.id}>
              {footerGroup.headers.map((footer) => (
                <TData {...tdataStyle} key={footer.id}>
                  {flexRender(footer.column.columnDef.footer, footer.getContext())}
                </TData>
              ))}
            </TRow>
          ))}
        </BaseTFoot>
      )}
    </Fragment>
  );
};

export { TFoot };
