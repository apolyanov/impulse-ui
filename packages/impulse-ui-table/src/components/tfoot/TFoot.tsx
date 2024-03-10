'use client';
import React, { FunctionComponent } from 'react';
import { useComponentStyle } from '@impulse-ui/core';
import { TFootComponentProps } from '@impulse-ui/types/src';
import { flexRender } from '@tanstack/react-table';

import { useImpulseTable } from '../../hooks';
import { tfootComponentMap } from '../../maps/tfoot.map';
import { TData } from '../tdata';
import { TRow } from '../trow';

import { BaseTFoot } from './BaseTFoot.styles';

const TFoot: FunctionComponent<TFootComponentProps> = ({ iStyle, iProps, ...rest }) => {
  const { getFooterGroups } = useImpulseTable();

  const { tfootStyle, trowStyle, tdataStyle, tfootStyleProps, trowStyleProps, tdataStyleProps } = useComponentStyle(
    tfootComponentMap,
    rest,
    undefined,
    undefined,
    iStyle,
    iProps,
  );

  return (
    <BaseTFoot $iStyle={tfootStyle} $iProps={tfootStyleProps} {...rest}>
      {getFooterGroups().map((footerGroup) => (
        <TRow iStyle={trowStyle} iProps={trowStyleProps} key={footerGroup.id}>
          {footerGroup.headers.map((footer) => (
            <TData iStyle={tdataStyle} iProps={tdataStyleProps} key={footer.id}>
              {flexRender(footer.column.columnDef.footer, footer.getContext())}
            </TData>
          ))}
        </TRow>
      ))}
    </BaseTFoot>
  );
};

export { TFoot };
