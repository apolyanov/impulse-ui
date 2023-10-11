import { HTMLAttributes } from 'react';
import { Property } from 'csstype';

import { ContainerStyleProps } from '../layout';
import { TypographyStyleProps } from '../text';
import { CompositeComponentColors, IOProps, IOStyle } from '../theme';

interface AutoCompleteItemProps extends AutoCompleteItemRestProps {
  iStyle?: Partial<AutoCompleteItemStyle>;
  iProps?: Partial<AutoCompleteItemStyleProps>;
}

interface AutoCompleteItemRestProps extends HTMLAttributes<HTMLDivElement> {
  externalScroll?: boolean;
  highlighted?: boolean;
  selected?: boolean;
  itemText: string | number;
}

interface AutoCompleteItemStyle {
  mainContainerStyle: IOStyle<ContainerStyleProps>;
  typographyStyle: IOStyle<TypographyStyleProps>;
}

interface AutoCompleteItemStyleProps {
  mainContainerStyleProps: IOProps<ContainerStyleProps>;
  typographyStyleProps: IOProps<TypographyStyleProps>;
}

interface GetItemBackground {
  (iColorTheme: CompositeComponentColors, parentProps: AutoCompleteItemRestProps): Property.BackgroundColor;
}

type UseAutoCompleteItemStyleFnProps = Partial<AutoCompleteItemStyle & AutoCompleteItemStyleProps>;

interface UseAutoCompleteItemStyleFn {
  (
    rest: AutoCompleteItemRestProps,
    iStyle?: Partial<AutoCompleteItemStyle>,
    iProps?: Partial<AutoCompleteItemStyleProps>,
  ): UseAutoCompleteItemStyleFnProps;
}

export type {
  AutoCompleteItemProps,
  AutoCompleteItemRestProps,
  AutoCompleteItemStyle,
  AutoCompleteItemStyleProps,
  GetItemBackground,
  UseAutoCompleteItemStyleFn,
  UseAutoCompleteItemStyleFnProps,
};
