import { DetailedHTMLProps, TdHTMLAttributes } from 'react';

import { ComponentStyleProps, IComponent } from '../theme';

type TDataStyleProps = ComponentStyleProps;
type TDataProps = IComponent<TDataStyleProps> &
  DetailedHTMLProps<TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;

export type { TDataProps, TDataStyleProps };
