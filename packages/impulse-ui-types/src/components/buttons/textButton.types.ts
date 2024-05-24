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
} from '../theme';

import { ButtonHTMLProps } from './button.types';

interface TextButtonProps extends TextButtonRestProps {
  iStyle?: Partial<TextButtonStyle>;
}

interface TextButtonRestProps
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

interface TextButtonStyle {
  buttonStyle: IOStyle<TextButtonRestProps>;
  loaderStyle: IOStyle<TextButtonRestProps>;
}

export type { TextButtonProps, TextButtonRestProps, TextButtonStyle };
