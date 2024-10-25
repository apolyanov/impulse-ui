import {
  BordersCssProps,
  DisplayCssProps,
  FlexboxCssProps,
  GridCssProps,
  IComponent,
  PositionsCssProps,
  SizingCssProps,
  SpacingAliasCssProps,
  SpacingCssProps,
} from '@impulse-ui/core';

import { ButtonHTMLProps } from './button.types';

interface TextButtonProps extends TextButtonRestProps, IComponent {}
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

export type { TextButtonProps, TextButtonRestProps };
