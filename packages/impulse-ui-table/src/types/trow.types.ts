import { ComponentPropsWithoutRef } from 'react';
import { TableIComponent } from './impulseTable.types.ts';

type TRowHTMLProps = ComponentPropsWithoutRef<'tr'>;
interface TRowProps extends TRowHTMLProps, TableIComponent<TRowHTMLProps> {}

export type { TRowHTMLProps, TRowProps };
