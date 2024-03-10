import { IOStyle } from '../theme';

import { TSegmentProps } from './tsegment.types';

interface TBodyComponentProps extends TSegmentProps {
  iStyle?: Partial<TBodyStyle>;
}

interface TBodyStyle {
  tbodyStyle: IOStyle;
  trowStyle: IOStyle;
  tdataStyle: IOStyle;
}

export type { TBodyComponentProps, TBodyStyle };
