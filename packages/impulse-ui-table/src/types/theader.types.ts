import { JSX } from 'react';
import { IComponent } from '@impulse-ui/core';

type THeaderHTMLProps = JSX.IntrinsicElements['th'];
type THeaderProps = IComponent & THeaderHTMLProps;

export type { THeaderHTMLProps, THeaderProps };
