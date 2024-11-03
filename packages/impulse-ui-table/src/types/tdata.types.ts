import { ComponentPropsWithoutRef } from 'react';
import { TableIComponent } from './impulseTable.types.ts';

type TDataHTMLProps = ComponentPropsWithoutRef<'td'>;
interface TDataProps extends TDataHTMLProps, TableIComponent<TDataHTMLProps> {}

export type { TDataHTMLProps, TDataProps };
