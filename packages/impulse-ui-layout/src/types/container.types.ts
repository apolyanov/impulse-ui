import { JSX, PropsWithoutRef } from 'react';

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

type ContainerHTMLProps = PropsWithoutRef<JSX.IntrinsicElements['div']>;
type ContainerCSSProps = Partial<SpacingCssProps> &
  Partial<SpacingAliasCssProps> &
  Partial<BordersCssProps> &
  Partial<FlexboxCssProps> &
  Partial<GridCssProps> &
  Partial<PositionsCssProps> &
  Partial<SizingCssProps> &
  Partial<DisplayCssProps>;
type ContainerProps = IComponent & ContainerCSSProps;

export type { ContainerHTMLProps, ContainerProps, ContainerCSSProps };
