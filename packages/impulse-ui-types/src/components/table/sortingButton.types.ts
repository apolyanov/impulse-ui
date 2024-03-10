import { IconButtonProps } from '../buttons';

interface SortingButtonProps extends Omit<IconButtonProps, 'icon'> {
  columnId: string;
}

export type { SortingButtonProps };
