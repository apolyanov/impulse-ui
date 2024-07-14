import { JSX } from 'react';
import { IOStyle } from '../theme';
import { ImpulseTableState } from './impulseTableProvider.types';
import { TDataHTMLProps } from './tdata.types';
import { TRowHTMLProps } from './trow.types';
type TFootHTMLProps = JSX.IntrinsicElements['tfoot'];
interface TFootComponentProps extends TFootHTMLProps {
    iStyle?: Partial<TFootStyle<ImpulseTableState<any>>>;
}
interface TFootStyle<T = {}> {
    tfootStyle: IOStyle<TFootHTMLProps & T>;
    trowStyle: IOStyle<TRowHTMLProps & T>;
    tdataStyle: IOStyle<TDataHTMLProps & T>;
}
export type { TFootComponentProps, TFootHTMLProps, TFootStyle };
