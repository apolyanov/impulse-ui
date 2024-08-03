import { JSX } from 'react';
import { IComponent } from '@impulse-ui/core';

type TDataHTMLProps = JSX.IntrinsicElements['td'];
type TDataProps = IComponent & TDataHTMLProps;

export type { TDataHTMLProps, TDataProps };
