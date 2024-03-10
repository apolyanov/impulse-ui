import { DetailedHTMLProps, TdHTMLAttributes } from 'react';

import { IComponent } from '../theme';

type TDataProps = IComponent & DetailedHTMLProps<TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;

export type { TDataProps };
