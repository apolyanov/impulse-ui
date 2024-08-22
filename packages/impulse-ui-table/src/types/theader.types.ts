import { IComponent } from '@impulse-ui/core';
import { JSX } from 'react';

type THeaderHTMLProps = JSX.IntrinsicElements['th'];
type THeaderProps = IComponent & THeaderHTMLProps;

export type { THeaderHTMLProps, THeaderProps };
