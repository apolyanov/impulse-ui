import { HTMLAttributes } from 'react';

import { IOStyle } from '../theme';

interface AutoCompleteItemProps extends AutoCompleteItemRestProps {
  iStyle?: Partial<AutoCompleteItemStyle>;
}

interface AutoCompleteItemRestProps extends HTMLAttributes<HTMLDivElement> {
  externalScroll?: boolean;
  highlighted?: boolean;
  selected?: boolean;
  itemText: string | number;
}

interface AutoCompleteItemStyle {
  mainContainerStyle: IOStyle;
  typographyStyle: IOStyle;
}

export type { AutoCompleteItemProps, AutoCompleteItemRestProps, AutoCompleteItemStyle };
