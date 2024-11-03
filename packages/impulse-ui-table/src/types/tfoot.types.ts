import { ComponentPropsWithoutRef } from 'react';
import { TableIComponent } from './impulseTable.types.ts';

type TFootHTMLProps = ComponentPropsWithoutRef<'tfoot'>;

interface TFootComponentProps extends TFootHTMLProps, TableIComponent<TFootHTMLProps> {}

export type { TFootComponentProps, TFootHTMLProps };
