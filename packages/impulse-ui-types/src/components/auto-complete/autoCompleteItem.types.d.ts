import { ContainerHTMLProps } from '../layout';
import { IOStyle } from '../theme';
interface AutoCompleteItemProps extends AutoCompleteItemRestProps {
    iStyle?: Partial<AutoCompleteItemStyle>;
}
interface AutoCompleteItemRestProps extends ContainerHTMLProps {
    externalScroll?: boolean;
    highlighted?: boolean;
    selected?: boolean;
    itemText: string | number;
}
interface AutoCompleteItemStyle {
    mainContainerStyle: IOStyle<AutoCompleteItemRestProps>;
    typographyStyle: IOStyle<AutoCompleteItemRestProps>;
}
export type { AutoCompleteItemProps, AutoCompleteItemRestProps, AutoCompleteItemStyle };
