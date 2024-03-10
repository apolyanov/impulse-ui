import { ButtonHTMLAttributes } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { IOStyle } from '../theme';

interface IconButtonProps extends IconButtonRestProps, ButtonHTMLAttributes<HTMLButtonElement> {
  iStyle?: Partial<IconButtonStyle>;
}

interface IconButtonRestProps {
  icon: IconDefinition;
}

interface UseIconButtonStyleFnProps {
  iconButtonStyle: Partial<IconButtonStyle>;
}

interface IconButtonStyle<T = IconButtonRestProps> {
  buttonStyle: IOStyle<T>;
  iconStyle: IOStyle<T>;
}

export type { IconButtonProps, IconButtonStyle, UseIconButtonStyleFnProps };
