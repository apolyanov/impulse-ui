import { JSX } from 'react';
import { IconHTMLProps } from '../icon';
import { ContainerHTMLProps } from '../layout';
import { TypographyHTMLProps } from '../text';
import { IOStyle } from '../theme';
import { ImpulseTableState } from './impulseTableProvider.types';
import { TDataHTMLProps } from './tdata.types';
import { TRowHTMLProps } from './trow.types';
type TBodyHTMLProps = JSX.IntrinsicElements['tbody'];
interface TBodyComponentProps extends TBodyHTMLProps {
    iStyle?: Partial<TBodyStyle<ImpulseTableState<any>>>;
}
interface TBodyStyle<T = {}> {
    tbodyStyle: IOStyle<TBodyHTMLProps & T>;
    trowStyle: IOStyle<TRowHTMLProps & T>;
    tdataStyle: IOStyle<TDataHTMLProps & T>;
    noContentTrowStyle: IOStyle<TRowHTMLProps & T>;
    noContentTdataStyle: IOStyle<TDataHTMLProps & T>;
    noContentIconStyle: IOStyle<IconHTMLProps & T>;
    noContentTypographyStyle: IOStyle<TypographyHTMLProps & T>;
    noContentTbodyStyle: IOStyle<TBodyHTMLProps & T>;
    loaderSpinnerStyle: IOStyle<ContainerHTMLProps & T>;
}
export type { TBodyComponentProps, TBodyHTMLProps, TBodyStyle };
