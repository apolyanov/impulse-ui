import { JSX } from 'react';

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

type ButtonHTMLProps = JSX.IntrinsicElements['button'];

interface ButtonProps extends ButtonRestProps {
  iStyle?: Partial<ButtonStyle>;
}

interface ButtonRestProps
  extends ButtonHTMLProps,
    Partial<SpacingCssProps>,
    Partial<SpacingAliasCssProps>,
    Partial<BordersCssProps>,
    Partial<FlexboxCssProps>,
    Partial<GridCssProps>,
    Partial<PositionsCssProps>,
    Partial<SizingCssProps>,
    Partial<DisplayCssProps> {
  loading?: boolean;
}

interface ButtonStyle {
  buttonStyle: IOStyle<ButtonRestProps>;
  loaderStyle: IOStyle<ButtonRestProps>;
}

export type { ButtonHTMLProps, ButtonProps, ButtonRestProps, ButtonStyle };
