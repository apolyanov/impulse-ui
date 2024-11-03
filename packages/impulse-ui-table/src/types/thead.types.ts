import { ComponentPropsWithoutRef } from 'react';

import { TableIComponent } from './impulseTable.types.ts';
type THeadHTMLProps = ComponentPropsWithoutRef<'thead'>;

interface THeadComponentProps extends THeadHTMLProps, TableIComponent<THeadHTMLProps> {}

export type { THeadComponentProps, THeadHTMLProps };
