import { JSX } from 'react';

import { IOStyle } from '../theme';

type ButtonHTMLProps = JSX.IntrinsicElements['button'];

interface ButtonProps extends ButtonRestProps {
  iStyle?: Partial<ButtonStyle>;
}

interface ButtonRestProps extends ButtonHTMLProps {
  loading?: boolean;
}

interface ButtonStyle {
  buttonStyle: IOStyle<ButtonRestProps>;
  loaderStyle: IOStyle<ButtonRestProps>;
}

export type { ButtonHTMLProps, ButtonProps, ButtonRestProps, ButtonStyle };
