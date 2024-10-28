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
import { ContainerHTMLProps } from '@impulse-ui/layout';

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

interface SpinnerLoaderProps extends ContainerHTMLProps, IComponent<ContainerHTMLProps>, PartialSpinnerLoaderCSSProps {}

export type { SpinnerLoaderProps };
