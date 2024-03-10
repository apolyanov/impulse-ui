import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { IComponent } from '../theme';

interface IconProps extends IComponent, FontAwesomeIconProps {
  icon: IconDefinition;
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export type { IconProps };
