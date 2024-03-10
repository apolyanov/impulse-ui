import { IconButtonStyle } from '../buttons';
import { IOStyle } from '../theme';

import { TSegmentProps } from './tsegment.types';

interface THeadComponentProps extends TSegmentProps {
  iStyle?: Partial<THeadStyle>;
}

interface THeadStyle {
  theadStyle: IOStyle;
  trowStyle: IOStyle;
  theaderStyle: IOStyle;
  theaderTypographyStyle: IOStyle;
  theaderSortButtonStyle: Partial<IconButtonStyle>;
}

export type { THeadComponentProps, THeadStyle };
