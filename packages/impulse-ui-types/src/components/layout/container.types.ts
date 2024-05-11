import { JSX } from 'react';

import { IComponent } from '../theme';

type ContainerHTMLProps = JSX.IntrinsicElements['div'];
type ContainerProps = IComponent & ContainerHTMLProps;

export type { ContainerHTMLProps, ContainerProps };
