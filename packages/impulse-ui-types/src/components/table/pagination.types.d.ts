import { IconButtonStyle } from '../buttons';
import { TextInputStyle } from '../input';
import { ContainerHTMLProps } from '../layout';
import { TypographyHTMLProps } from '../text';
import { IOStyle } from '../theme';
interface PaginationProps {
    iStyle?: Partial<PaginationStyle>;
}
interface PaginationStyle<T = {}> {
    containerStyle: IOStyle<ContainerHTMLProps & T>;
    pageCounterStyle: IOStyle<TypographyHTMLProps & T>;
    pageInputStyle: Partial<TextInputStyle<T>>;
    pageChangeButtonStyle: Partial<IconButtonStyle<T>>;
}
export type { PaginationProps, PaginationStyle };
