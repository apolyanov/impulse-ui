import { JSX } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { IComponent } from '../theme';

type IconHTMLProps = JSX.IntrinsicElements['svg'];

interface IconProps extends IComponent, FontAwesomeIconProps {
  icon: IconDefinition;
}

export type { IconHTMLProps, IconProps };
