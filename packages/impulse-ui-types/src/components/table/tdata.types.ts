import { JSX } from 'react';

import { IComponent } from '../theme';

type TDataHTMLProps = JSX.IntrinsicElements['td'];
type TDataProps = IComponent & TDataHTMLProps;

export type { TDataHTMLProps, TDataProps };
