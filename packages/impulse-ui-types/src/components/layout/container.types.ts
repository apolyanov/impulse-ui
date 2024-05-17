import { JSX, PropsWithoutRef } from 'react';

import { IComponent } from '../theme';

type ContainerHTMLProps = PropsWithoutRef<JSX.IntrinsicElements['div']>;
type ContainerProps = IComponent;

export type { ContainerHTMLProps, ContainerProps };
