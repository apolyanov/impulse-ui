import { IComponent } from '@impulse-ui/core';
import { ContainerHTMLProps } from '@impulse-ui/layout';

interface SelectOptionProps extends SelectOptionRestProps, IComponent<SelectOptionRestProps> {}

interface SelectOptionRestProps extends ContainerHTMLProps {
  externalScroll?: boolean;
  highlighted?: boolean;
  selected?: boolean;
  itemText: string | number;
}

export type { SelectOptionProps, SelectOptionRestProps };
