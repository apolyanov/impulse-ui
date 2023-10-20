import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ComponentStyleProps, IComponent } from '../theme';

type TRowStyleProps = ComponentStyleProps;
type TRowProps = IComponent<TRowStyleProps> &
  DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;

export type { TRowProps, TRowStyleProps };
