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
} from '@impulse-ui/core';

type ButtonHTMLProps = ComponentPropsWithoutRef<'button'>;

interface ButtonCSSProps
  extends SpacingCssProps,
    SpacingAliasCssProps,
    BordersCssProps,
    FlexboxCssProps,
    GridCssProps,
    PositionsCssProps,
    SizingCssProps,
    DisplayCssProps {}

type PartialButtonCssProps = Partial<ButtonCSSProps>;

interface ButtonProps extends ButtonRestProps, IComponent<ButtonRestProps> {}

interface ButtonRestProps extends ButtonHTMLProps, PartialButtonCssProps {
  loading?: boolean;
}

export type { ButtonHTMLProps, ButtonProps, ButtonRestProps };
