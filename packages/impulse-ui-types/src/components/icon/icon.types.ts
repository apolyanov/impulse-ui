import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { ComponentStyleProps, IComponent } from '../theme';

type IconStyleProps = ComponentStyleProps;

interface IconProps extends IComponent<IconStyleProps>, FontAwesomeIconProps {
  icon: IconDefinition;
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export type { IconProps, IconStyleProps };
