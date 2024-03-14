import { IconButtonStyle } from '../buttons';
import { IOStyle } from '../theme';

interface THeadComponentProps {
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
