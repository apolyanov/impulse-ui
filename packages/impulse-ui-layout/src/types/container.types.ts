import { JSX, PropsWithoutRef } from 'react';

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

type ContainerHTMLProps = Omit<PropsWithoutRef<JSX.IntrinsicElements['div']>, keyof ColorsCssProps>;
type ContainerCSSProps = Partial<SpacingCssProps> &
  Partial<SpacingAliasCssProps> &
  Partial<BordersCssProps> &
  Partial<FlexboxCssProps> &
  Partial<GridCssProps> &
  Partial<PositionsCssProps> &
  Partial<SizingCssProps> &
  Partial<DisplayCssProps> &
  Partial<ColorsCssProps> &
  Partial<TypographyCssProps>;
type ContainerProps = IComponent & ContainerCSSProps;

export type { ContainerHTMLProps, ContainerProps, ContainerCSSProps };
