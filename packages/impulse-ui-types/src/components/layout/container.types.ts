import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ComponentStyleProps, IComponent } from '../theme';

type ContainerStyleProps = ComponentStyleProps;

type ContainerProps = IComponent<ContainerStyleProps> &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type { ContainerProps, ContainerStyleProps };
