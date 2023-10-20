import { DetailedHTMLProps, ThHTMLAttributes } from 'react';

import { ComponentStyleProps, IComponent } from '../theme';

type THeaderStyleProps = ComponentStyleProps;
type THeaderProps = IComponent<THeaderStyleProps> &
  DetailedHTMLProps<ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;

export type { THeaderProps, THeaderStyleProps };
