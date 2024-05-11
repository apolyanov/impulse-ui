import { JSX } from 'react';

import { IComponent } from '../theme';

type THeaderHTMLProps = JSX.IntrinsicElements['th'];
type THeaderProps = IComponent & THeaderHTMLProps;

export type { THeaderHTMLProps, THeaderProps };
