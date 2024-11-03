import { IComponent } from '@impulse-ui/core';
import { ContainerHTMLProps } from '@impulse-ui/layout';

interface AutoCompleteItemProps extends AutoCompleteItemRestProps, IComponent<AutoCompleteItemRestProps> {}

interface AutoCompleteItemRestProps extends ContainerHTMLProps {
  externalScroll?: boolean;
  highlighted?: boolean;
  selected?: boolean;
  itemText: string | number;
}

export type { AutoCompleteItemProps, AutoCompleteItemRestProps };
