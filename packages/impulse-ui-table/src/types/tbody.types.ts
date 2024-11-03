import { ComponentPropsWithoutRef } from 'react';
import { TableIComponent } from './impulseTable.types.ts';

type TBodyHTMLProps = ComponentPropsWithoutRef<'tbody'>;

interface TBodyComponentProps extends TBodyHTMLProps, TableIComponent<TBodyHTMLProps> {}

export type { TBodyComponentProps, TBodyHTMLProps };
