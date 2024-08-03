import { JSX } from 'react';

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

type LinkHTMLProps = JSX.IntrinsicElements['a'];

type LinkProps = IComponent &
  LinkHTMLProps &
  Partial<SpacingCssProps> &
  Partial<SpacingAliasCssProps> &
  Partial<BordersCssProps> &
  Partial<FlexboxCssProps> &
  Partial<GridCssProps> &
  Partial<PositionsCssProps> &
  Partial<SizingCssProps> &
  Partial<DisplayCssProps>;

export type { LinkHTMLProps, LinkProps };
