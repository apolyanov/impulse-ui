import { HTMLAttributes } from 'react';
import { Property } from 'csstype';

import { ContainerStyleProps } from '../../layout';
import { TypographyStyleProps } from '../../text';
import { CompositeComponentColors, IOProps, IOStyle } from '../../types/components.types';

interface BasicAutoCompleteIteiProps extends BasicAutoCompleteItemRestProps {
  iStyle?: Partial<BasicAutoCompleteItemStyle>;
  iProps?: Partial<BasicAutoCompleteItemStyleProps>;
}

interface BasicAutoCompleteItemRestProps extends HTMLAttributes<HTMLDivElement> {
  externalScroll?: boolean;
  highlighted?: boolean;
  selected?: boolean;
  itemText: string | number;
}

interface BasicAutoCompleteItemStyle {
  mainContainerStyle: IOStyle<ContainerStyleProps>;
  typographyStyle: IOStyle<TypographyStyleProps>;
}

interface BasicAutoCompleteItemStyleProps {
  mainContainerStyleProps: IOProps<ContainerStyleProps>;
  typographyStyleProps: IOProps<TypographyStyleProps>;
}

interface GetItemBackground {
  (iColorTheme: CompositeComponentColors, parentProps: BasicAutoCompleteItemRestProps): Property.BackgroundColor;
}

type UseBasicAutoCompleteItemStyleFnProps = Partial<BasicAutoCompleteItemStyle & BasicAutoCompleteItemStyleProps>;

interface UseBasicAutoCompleteItemStyleFn {
  (
    rest: BasicAutoCompleteItemRestProps,
    iStyle?: Partial<BasicAutoCompleteItemStyle>,
    iProps?: Partial<BasicAutoCompleteItemStyleProps>,
  ): UseBasicAutoCompleteItemStyleFnProps;
}

export type {
  BasicAutoCompleteIteiProps,
  BasicAutoCompleteItemRestProps,
  BasicAutoCompleteItemStyle,
  BasicAutoCompleteItemStyleProps,
  GetItemBackground,
  UseBasicAutoCompleteItemStyleFn,
  UseBasicAutoCompleteItemStyleFnProps,
};
