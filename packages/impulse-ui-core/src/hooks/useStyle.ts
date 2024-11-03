import { useMemo } from 'react';
import { mergePartialThemes } from '../utils';
import { IColorTheme, IOCss, IOStyle } from '../types';

const useStyle = <Props extends object>(
  props: Props,
  defaultTheme?: IOStyle<Props>,
  iCss?: IOCss<Props>,
  iTheme?: IColorTheme,
): IOStyle =>
  useMemo(
    () => mergePartialThemes({ defaultTheme, overridingTheme: { iCss, iTheme }, props }) as IOStyle,
    [defaultTheme, iCss, iTheme, props],
  );

export { useStyle };
