import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ComponentStyleProps, IComponent } from '../theme';

type TSegmentStyleProps = ComponentStyleProps;
type TSegmentProps = IComponent<TSegmentStyleProps> &
  DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;

export type { TSegmentProps, TSegmentStyleProps };
