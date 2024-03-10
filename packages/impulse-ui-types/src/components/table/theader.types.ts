import { DetailedHTMLProps, ThHTMLAttributes } from 'react';

import { IComponent } from '../theme';

type THeaderProps = IComponent & DetailedHTMLProps<ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;

export type { THeaderProps };
