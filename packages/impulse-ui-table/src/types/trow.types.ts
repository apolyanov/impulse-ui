import { JSX } from 'react';
import { IComponent } from '@impulse-ui/core';

type TRowHTMLProps = JSX.IntrinsicElements['tr'];
type TRowProps = IComponent & TRowHTMLProps;

export type { TRowHTMLProps, TRowProps };
