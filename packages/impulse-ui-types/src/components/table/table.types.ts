import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { IComponent } from '../theme';

type TableProps = IComponent & DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement>;

export type { TableProps };
