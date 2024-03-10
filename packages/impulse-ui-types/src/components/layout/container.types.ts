import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { IComponent } from '../theme';

type ContainerProps = IComponent & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type { ContainerProps };
