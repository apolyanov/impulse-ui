import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { JSX } from 'react';

import { IComponent, PositionsCssProps, SpacingAliasCssProps, SpacingCssProps } from '@impulse-ui/core';

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
