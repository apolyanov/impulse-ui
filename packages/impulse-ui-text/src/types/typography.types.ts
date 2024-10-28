import { ComponentPropsWithoutRef } from 'react';

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

type TypographyHTMLProps = ComponentPropsWithoutRef<'p'>;

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

interface TypographyProps extends IComponent<TypographyHTMLProps>, TypographyHTMLProps, PartialTypographyCSSProps {}

export type { TypographyHTMLProps, TypographyProps };
