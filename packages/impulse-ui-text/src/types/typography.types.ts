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
  TypographyCssProps,
} from '@impulse-ui/core';

type TypographyHTMLProps = PropsWithoutRef<JSX.IntrinsicElements['p']>;
type TypographyProps = IComponent &
  Partial<SpacingCssProps> &
  Partial<SpacingAliasCssProps> &
  Partial<BordersCssProps> &
  Partial<FlexboxCssProps> &
  Partial<GridCssProps> &
  Partial<PositionsCssProps> &
  Partial<SizingCssProps> &
  Partial<DisplayCssProps> &
  Partial<TypographyCssProps>;

export type { TypographyHTMLProps, TypographyProps };
