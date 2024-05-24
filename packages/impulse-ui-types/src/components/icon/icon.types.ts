import { JSX } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { IComponent, PositionsCssProps, SpacingAliasCssProps, SpacingCssProps } from '../theme';

type IconHTMLProps = JSX.IntrinsicElements['svg'];

interface IconProps
  extends IComponent,
    FontAwesomeIconProps,
    Partial<SpacingCssProps>,
    Partial<SpacingAliasCssProps>,
    Partial<PositionsCssProps> {
  icon: IconDefinition;
}

export type { IconHTMLProps, IconProps };
