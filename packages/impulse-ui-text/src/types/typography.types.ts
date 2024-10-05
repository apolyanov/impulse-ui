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

interface TypographyCSSProps
  extends SpacingCssProps,
    SpacingAliasCssProps,
    BordersCssProps,
    FlexboxCssProps,
    GridCssProps,
    PositionsCssProps,
    SizingCssProps,
    DisplayCssProps,
    TypographyCssProps {}

type PartialTypographyCSSProps = Partial<TypographyCSSProps>;

interface TypographyProps extends IComponent, PartialTypographyCSSProps {}

export type { TypographyHTMLProps, TypographyProps };
