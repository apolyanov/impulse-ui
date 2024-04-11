import { IOStyle } from '../theme';

import { TSegmentProps } from './tsegment.types';

interface TBodyComponentProps extends TSegmentProps {
  iStyle?: Partial<TBodyStyle>;
}

interface TBodyStyle {
  tbodyStyle: IOStyle;
  trowStyle: IOStyle;
  tdataStyle: IOStyle;
  noContentTrowStyle: IOStyle;
  noContentTdataStyle: IOStyle;
  noContentIconStyle: IOStyle;
  noContentTypographyStyle: IOStyle;
  noContentTbodyStyle: IOStyle;
}

export type { TBodyComponentProps, TBodyStyle };
