import { JSX } from 'react';

import { IOStyle } from '@impulse-ui/core';
import { ImpulseTableState } from './impulseTableProvider.types';
import { TDataHTMLProps } from './tdata.types';
import { TRowHTMLProps } from './trow.types';

type TFootHTMLProps = JSX.IntrinsicElements['tfoot'];

interface TFootComponentProps<T> extends TFootHTMLProps {
  iStyle?: Partial<TFootStyle<ImpulseTableState<T>>>;
}

interface TFootStyle<T> {
  tfootStyle: IOStyle<TFootHTMLProps & T>;
  trowStyle: IOStyle<TRowHTMLProps & T>;
  tdataStyle: IOStyle<TDataHTMLProps & T>;
}

export type { TFootComponentProps, TFootHTMLProps, TFootStyle };
