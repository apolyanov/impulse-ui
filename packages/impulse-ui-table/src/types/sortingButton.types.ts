import { IconButtonProps } from '@impulse-ui/buttons';

interface SortingButtonProps extends Omit<IconButtonProps, 'icon'> {
  columnId: string;
}

export type { SortingButtonProps };
