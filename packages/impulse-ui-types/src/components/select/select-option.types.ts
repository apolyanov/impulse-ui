import { HTMLAttributes } from 'react';

import { IOStyle } from '../theme';

interface SelectOptionProps extends SelectOptionRestProps {
  iStyle?: Partial<SelectOptionStyle>;
}

interface SelectOptionRestProps extends HTMLAttributes<HTMLDivElement> {
  externalScroll?: boolean;
  highlighted?: boolean;
  selected?: boolean;
  itemText: string | number;
}

interface SelectOptionStyle {
  mainContainerStyle: IOStyle;
  typographyStyle: IOStyle;
}

export type { SelectOptionProps, SelectOptionRestProps, SelectOptionStyle };
