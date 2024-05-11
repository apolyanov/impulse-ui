import { IOStyle } from '../theme';

import { ButtonHTMLProps } from './button.types';

interface TextButtonProps extends TextButtonRestProps {
  iStyle?: Partial<TextButtonStyle>;
}

interface TextButtonRestProps extends ButtonHTMLProps {
  loading?: boolean;
}

interface TextButtonStyle {
  buttonStyle: IOStyle<TextButtonRestProps>;
  loaderStyle: IOStyle<TextButtonRestProps>;
}

export type { TextButtonProps, TextButtonRestProps, TextButtonStyle };
