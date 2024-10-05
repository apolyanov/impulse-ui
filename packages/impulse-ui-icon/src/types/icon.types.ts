import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { ComponentPropsWithoutRef } from 'react';

import { IComponent, PositionsCssProps, SpacingAliasCssProps, SpacingCssProps } from '@impulse-ui/core';

type IconHTMLProps = ComponentPropsWithoutRef<'svg'>;

interface IconCSSProps extends SpacingCssProps, SpacingAliasCssProps, PositionsCssProps {}
type PartialIconCSSProps = Partial<IconCSSProps>;

interface IconProps extends IComponent, FontAwesomeIconProps, PartialIconCSSProps {
  icon: IconDefinition;
}

export type { IconHTMLProps, IconProps };
