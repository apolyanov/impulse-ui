import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { ComponentStyleProps, IComponent } from '../../types';

type IconStyleProps = ComponentStyleProps;

interface IIconProps extends IComponent<IconStyleProps> {
  icon: IconDefinition;
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export type { IconStyleProps, IIconProps };
