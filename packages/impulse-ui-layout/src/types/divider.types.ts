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

type DividerProps = IComponent &
  Partial<SpacingCssProps> &
  Partial<SpacingAliasCssProps> &
  Partial<BordersCssProps> &
  Partial<FlexboxCssProps> &
  Partial<GridCssProps> &
  Partial<PositionsCssProps> &
  Partial<SizingCssProps> &
  Partial<DisplayCssProps>;

export type { DividerProps };
