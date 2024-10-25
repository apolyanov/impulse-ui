import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { IComponent } from '@impulse-ui/core';

import { ButtonRestProps } from './button.types';

interface IconButtonProps extends IconButtonRestProps, IComponent<IconButtonRestProps> {}

interface IconButtonRestProps extends ButtonRestProps {
  icon: IconDefinition;
}

export type { IconButtonProps, IconButtonRestProps };
