import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { IComponent, SpacingProps } from '../theme';

type ContainerProps = IComponent &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
  Partial<SpacingProps>;

export type { ContainerProps };
