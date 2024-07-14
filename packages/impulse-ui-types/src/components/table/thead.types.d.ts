import { JSX } from 'react';
import { IconButtonStyle } from '../buttons';
import { TypographyHTMLProps } from '../text';
import { IOStyle } from '../theme';
import { ImpulseTableState } from './impulseTableProvider.types';
import { THeaderHTMLProps } from './theader.types';
import { TRowHTMLProps } from './trow.types';
type THeadHTMLProps = JSX.IntrinsicElements['thead'];
interface THeadComponentProps {
    iStyle?: Partial<THeadStyle<ImpulseTableState<any>>>;
}
interface THeadStyle<T = {}> {
    theadStyle: IOStyle<THeadHTMLProps & T>;
    trowStyle: IOStyle<TRowHTMLProps & T>;
    theaderStyle: IOStyle<THeaderHTMLProps & T>;
    theaderTypographyStyle: IOStyle<TypographyHTMLProps & T>;
    theaderSortButtonStyle: Partial<IconButtonStyle<T>>;
}
export type { THeadComponentProps, THeadHTMLProps, THeadStyle };
