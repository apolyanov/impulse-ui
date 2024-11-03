import { ComponentPropsWithoutRef } from 'react';
import { TableIComponent } from './impulseTable.types.ts';

type THeaderHTMLProps = ComponentPropsWithoutRef<'th'>;
interface THeaderProps extends THeaderHTMLProps, TableIComponent<THeaderHTMLProps> {}

export type { THeaderHTMLProps, THeaderProps };
