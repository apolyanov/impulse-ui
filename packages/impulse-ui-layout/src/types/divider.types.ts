import {
  BordersCssProps,
  ColorsCssProps,
  DisplayCssProps,
  FlexboxCssProps,
  GridCssProps,
  IComponent,
  PositionsCssProps,
  SizingCssProps,
  SpacingAliasCssProps,
  SpacingCssProps,
  TypographyCssProps,
} from '@impulse-ui/core';
import { ContainerHTMLProps } from './container.types.ts';

interface DividerCSSProps
  extends SpacingCssProps,
    SpacingAliasCssProps,
    BordersCssProps,
    FlexboxCssProps,
    GridCssProps,
    PositionsCssProps,
    SizingCssProps,
    DisplayCssProps,
    ColorsCssProps,
    TypographyCssProps {}

type PartialDividerCSSProps = Partial<DividerCSSProps>;

interface DividerProps extends IComponent, ContainerHTMLProps, PartialDividerCSSProps {}

export type { DividerProps };
