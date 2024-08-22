import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { IOStyle } from '@impulse-ui/core';

import { ButtonRestProps } from './button.types';

interface IconButtonProps extends IconButtonRestProps {
  iStyle?: Partial<IconButtonStyle<any>>;
}

interface IconButtonRestProps extends ButtonRestProps {
  icon: IconDefinition;
  loading?: boolean;
}

interface IconButtonStyle<T = {}> {
  buttonStyle: IOStyle<IconButtonRestProps & T>;
  iconStyle: IOStyle<IconButtonRestProps & T>;
  loaderStyle: IOStyle<IconButtonRestProps & T>;
}

export type { IconButtonProps, IconButtonStyle };
