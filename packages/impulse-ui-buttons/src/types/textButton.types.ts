import {
  BordersCssProps,
  DisplayCssProps,
  FlexboxCssProps,
  GridCssProps,
  IOStyle,
  PositionsCssProps,
  SizingCssProps,
  SpacingAliasCssProps,
  SpacingCssProps,
} from '@impulse-ui/core';

import { ButtonHTMLProps } from './button.types';

interface TextButtonProps extends TextButtonRestProps {
  iStyle?: Partial<TextButtonStyle>;
}
interface TextButtonCSSProps
  extends SpacingCssProps,
    SpacingAliasCssProps,
    BordersCssProps,
    FlexboxCssProps,
    GridCssProps,
    PositionsCssProps,
    SizingCssProps,
    DisplayCssProps {}

type PartialTextButtonCSSProps = Partial<TextButtonCSSProps>;

interface TextButtonRestProps extends ButtonHTMLProps, PartialTextButtonCSSProps {
  loading?: boolean;
}

interface TextButtonStyle {
  buttonStyle: IOStyle<TextButtonRestProps>;
  loaderStyle: IOStyle<TextButtonRestProps>;
}

export type { TextButtonProps, TextButtonRestProps, TextButtonStyle };
