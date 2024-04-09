'use client';
import React, { Fragment, FunctionComponent } from 'react';
import { useComponentStyle } from '@impulse-ui/core';
import { TFootComponentProps } from '@impulse-ui/types';
import { flexRender } from '@tanstack/react-table';

import { useImpulseTable } from '../../hooks';
import { tfootComponentMap } from '../../maps';
import { TData } from '../tdata';
import { TRow } from '../trow';

import { BaseTFoot } from './BaseTFoot.styles';

const TFoot: FunctionComponent<TFootComponentProps> = ({ iStyle, ...rest }) => {
  const { getFooterGroups } = useImpulseTable();

  const shouldRenderFooter = () => getFooterGroups().length > 0;
  const { tfootStyle, trowStyle, tdataStyle } = useComponentStyle(tfootComponentMap, rest, undefined, iStyle);

  return (
    <Fragment>
      {shouldRenderFooter() && (
        <BaseTFoot $iStyle={tfootStyle} {...rest}>
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
