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
} from '@impulse-ui/core';

interface SpinnerLoaderCSSProps
  extends SpacingCssProps,
    SpacingAliasCssProps,
    BordersCssProps,
    FlexboxCssProps,
    GridCssProps,
    PositionsCssProps,
    SizingCssProps,
    DisplayCssProps,
    ColorsCssProps {}

type PartialSpinnerLoaderCSSProps = Partial<SpinnerLoaderCSSProps>;

interface SpinnerLoaderProps extends IComponent, PartialSpinnerLoaderCSSProps {}

export type { SpinnerLoaderProps };
