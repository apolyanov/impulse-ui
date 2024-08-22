import { IComponent } from '@impulse-ui/core';
import { JSX } from 'react';

type TRowHTMLProps = JSX.IntrinsicElements['tr'];
type TRowProps = IComponent & TRowHTMLProps;

export type { TRowHTMLProps, TRowProps };
