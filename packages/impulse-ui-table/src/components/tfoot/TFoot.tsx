import { extractCssProps } from '@impulse-ui/core';
import { flexRender } from '@tanstack/react-table';
import { Fragment, useMemo } from 'react';

import { useImpulseTable } from '../../hooks';
import { TData } from '../tdata';
import { TRow } from '../trow';

import { TFootComponentProps } from '../../types';
import { BaseTFoot } from './BaseTFoot.styles.tsx';

const TFoot = ({ ...rest }: TFootComponentProps) => {
  const tableProps = useImpulseTable();
  const { getFooterGroups } = tableProps;
  const { cssProps, componentProps } = extractCssProps(rest);

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
        <BaseTFoot $cssProps={cssProps} $tableProps={tableProps} {...componentProps}>
          {getFooterGroups().map((footerGroup) => (
            <TRow key={footerGroup.id}>
              {footerGroup.headers.map((footer) => (
                <TData key={footer.id}>{flexRender(footer.column.columnDef.footer, footer.getContext())}</TData>
              ))}
            </TRow>
          ))}
        </BaseTFoot>
      )}
    </Fragment>
  );
};

export { TFoot };
