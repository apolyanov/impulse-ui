import { JSX } from 'react';

import { IconButtonStyle } from '@impulse-ui/buttons';
import { IOStyle } from '@impulse-ui/core';
import { TypographyHTMLProps } from '@impulse-ui/text';
import { ImpulseTableState } from './impulseTableProvider.types';
import { THeaderHTMLProps } from './theader.types';
import { TRowHTMLProps } from './trow.types';

type THeadHTMLProps = JSX.IntrinsicElements['thead'];

interface THeadComponentProps<T extends object> extends THeadHTMLProps {
  iStyle?: Partial<THeadStyle<ImpulseTableState<T>>>;
}

interface THeadStyle<T> {
  theadStyle: IOStyle<THeadHTMLProps & T>;
  trowStyle: IOStyle<TRowHTMLProps & T>;
  theaderStyle: IOStyle<THeaderHTMLProps & T>;
  theaderTypographyStyle: IOStyle<TypographyHTMLProps & T>;
  theaderSortButtonStyle: Partial<IconButtonStyle<T>>;
}

export type { THeadComponentProps, THeadHTMLProps, THeadStyle };
