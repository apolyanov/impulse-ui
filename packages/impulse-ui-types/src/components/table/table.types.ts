import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ComponentStyleProps, IComponent } from '../theme';

type TableStyleProps = ComponentStyleProps;
type TableProps = IComponent<TableStyleProps> & DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement>;

export type { TableProps, TableStyleProps };
