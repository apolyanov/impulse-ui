import { ContainerHTMLProps } from '@impulse-ui/layout';
import { IOStyle } from '@impulse-ui/core';

interface SelectOptionProps extends SelectOptionRestProps {
  iStyle?: Partial<SelectOptionStyle>;
}

interface SelectOptionRestProps extends ContainerHTMLProps {
  externalScroll?: boolean;
  highlighted?: boolean;
  selected?: boolean;
  itemText: string | number;
}

interface SelectOptionStyle {
  mainContainerStyle: IOStyle<SelectOptionRestProps>;
  typographyStyle: IOStyle<SelectOptionRestProps>;
}

export type { SelectOptionProps, SelectOptionRestProps, SelectOptionStyle };
