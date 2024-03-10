import { IOStyle } from '../theme';

import { TSegmentProps } from './tsegment.types';

interface TFootComponentProps extends TSegmentProps {
  iStyle?: Partial<TFootStyle>;
}

interface TFootStyle {
  tfootStyle: IOStyle;
  trowStyle: IOStyle;
  tdataStyle: IOStyle;
}

export type { TFootComponentProps, TFootStyle };
