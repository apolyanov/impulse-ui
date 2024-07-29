import { extractCssProps, useComponentStyle } from '@impulse-ui/core';
import { TFootComponentProps } from '@impulse-ui/types';
import { flexRender } from '@tanstack/react-table';
import { Fragment, FunctionComponent, useMemo } from 'react';

import { useImpulseTable } from '../../hooks';
import { tfootComponentMap } from '../../maps';
import { TData } from '../tdata';
import { TRow } from '../trow';

import { BaseTFoot } from './BaseTFoot.styles';

const TFoot: FunctionComponent<TFootComponentProps> = ({ iStyle, ...rest }) => {
  const { getFooterGroups } = useImpulseTable();
  const { tfootStyle, trowStyle, tdataStyle } = useComponentStyle(tfootComponentMap, rest, undefined, iStyle);

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
        <BaseTFoot $iStyle={tfootStyle} $cssProps={extractCssProps(rest)} {...rest}>
          {getFooterGroups().map((footerGroup) => (
            <TRow iStyle={trowStyle} key={footerGroup.id}>
              {footerGroup.headers.map((footer) => (
                <TData iStyle={tdataStyle} key={footer.id}>
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
