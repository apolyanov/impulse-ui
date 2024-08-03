import { JSX } from 'react';
import { ImpulseTableState } from './impulseTableProvider.types';
import { TDataHTMLProps } from './tdata.types';
import { TRowHTMLProps } from './trow.types';
import { IOStyle } from '@impulse-ui/core';
import { IconHTMLProps } from '@impulse-ui/icon';
import { TypographyHTMLProps } from '@impulse-ui/text';
import { ContainerHTMLProps } from '@impulse-ui/layout';

type TBodyHTMLProps = JSX.IntrinsicElements['tbody'];

interface TBodyComponentProps<T> extends TBodyHTMLProps {
  iStyle?: Partial<TBodyStyle<ImpulseTableState<T>>>;
}

interface TBodyStyle<T> {
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
