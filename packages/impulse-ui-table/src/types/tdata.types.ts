import { IComponent } from '@impulse-ui/core';
import { JSX } from 'react';

type TDataHTMLProps = JSX.IntrinsicElements['td'];
type TDataProps = IComponent & TDataHTMLProps;

export type { TDataHTMLProps, TDataProps };
