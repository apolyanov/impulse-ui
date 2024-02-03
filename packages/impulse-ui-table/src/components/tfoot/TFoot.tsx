import React, { FunctionComponent } from 'react';
import { TFootProps } from '@impulse-ui/types';
import { flexRender } from '@tanstack/react-table';

import { useImpulseTable } from '../../hooks';
import { TData } from '../tdata';
import { TRow } from '../trow';

import { BaseTFoot } from './BaseTFoot.styles';

const TFoot: FunctionComponent<TFootProps> = ({ iStyle, iProps, parentProps, ...rest }) => {
  const { getFooterGroups } = useImpulseTable();

  return (
    <BaseTFoot $iStyle={iStyle} $iProps={iProps} $parentProps={parentProps} {...rest}>
      {getFooterGroups().map((footerGroup) => (
        <TRow key={footerGroup.id}>
          {footerGroup.headers.map((footer) => (
            <TData key={footer.id}>{flexRender(footer.column.columnDef.footer, footer.getContext())}</TData>
          ))}
        </TRow>
      ))}
    </BaseTFoot>
  );
};

export { TFoot };
