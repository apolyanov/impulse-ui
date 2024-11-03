import { ComponentPropsWithoutRef } from 'react';
import { TableIComponent } from './impulseTable.types.ts';

type TableHTMLProps = ComponentPropsWithoutRef<'table'>;
interface TableProps extends TableHTMLProps, TableIComponent<TableHTMLProps> {}

export type { TableHTMLProps, TableProps };
