import { IconButtonProps } from '../buttons';

interface ClearButtonProps extends Omit<IconButtonProps, 'icon'> {
  focusable?: boolean;
  clearable?: boolean;
  clearIcon?: IconButtonProps['icon'];
}

interface ClearButtonParentProps {
  clearIcon?: IconButtonProps['icon'];
  focusable?: boolean;
}

export type { ClearButtonProps, ClearButtonParentProps };
