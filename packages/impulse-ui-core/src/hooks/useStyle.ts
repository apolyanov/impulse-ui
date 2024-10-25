import { useMemo } from 'react';
import { mergePartialThemes } from '../utils';
import { IColorTheme, IOCss, IOStyle } from '../types';
import { ButtonRestProps } from '@impulse-ui/buttons';

const useStyle = <Props extends object>(
  props: Props,
  defaultTheme?: IOStyle<Props>,
  iCss?: IOCss<Props>,
  iTheme?: IColorTheme,
) =>
  useMemo(
    () => mergePartialThemes({ defaultTheme, overridingTheme: { iCss, iTheme }, props }) as IOStyle<ButtonRestProps>,
    [defaultTheme, iCss, iTheme, props],
  );

export { useStyle };
