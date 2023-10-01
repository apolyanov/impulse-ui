import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { ComponentStyleProps, IComponent } from '../theme';

type IconStyleProps = ComponentStyleProps;

interface IconProps extends IComponent<IconStyleProps> {
  icon: IconDefinition;
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export type { IconProps, IconStyleProps };
