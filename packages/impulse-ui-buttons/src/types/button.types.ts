import { ComponentPropsWithoutRef } from 'react';

import {
  BordersCssProps,
  DisplayCssProps,
  FlexboxCssProps,
  GridCssProps,
  IOStyle,
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

interface ButtonProps extends ButtonRestProps {
  iStyle?: Partial<ButtonStyle>;
}

interface ButtonRestProps extends ButtonHTMLProps, PartialButtonCssProps {
  loading?: boolean;
}

interface ButtonStyle {
  buttonStyle: IOStyle<ButtonRestProps>;
  loaderStyle: IOStyle<ButtonRestProps>;
}

export type { ButtonHTMLProps, ButtonProps, ButtonRestProps, ButtonStyle };
