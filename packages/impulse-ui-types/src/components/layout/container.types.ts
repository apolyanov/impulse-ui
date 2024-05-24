import { JSX, PropsWithoutRef } from 'react';

import { IComponent, SpacingAliasCssProps, SpacingCssProps } from '../theme';

type ContainerHTMLProps = PropsWithoutRef<JSX.IntrinsicElements['div']>;
type ContainerProps = IComponent & Partial<SpacingCssProps> & Partial<SpacingAliasCssProps>;

export type { ContainerHTMLProps, ContainerProps };
