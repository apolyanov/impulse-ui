import { JSX } from 'react';
import { IComponent } from '../theme';
type TRowHTMLProps = JSX.IntrinsicElements['tr'];
type TRowProps = IComponent & TRowHTMLProps;
export type { TRowHTMLProps, TRowProps };
