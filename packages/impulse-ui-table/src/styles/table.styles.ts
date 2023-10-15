import { neutral1 } from '@impulse-ui/colours';
import { neutral12 } from '@impulse-ui/colours/src';
import { shouldRenderCssProp } from '@impulse-ui/core';
import { ComponentTheme } from '@impulse-ui/types';
import { TableStyleProps } from '@impulse-ui/types/src/components/table/table.types';

const table: ComponentTheme<TableStyleProps> = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: neutral1,
        backgroundColorHover: neutral1,
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral12,
        colorHover: neutral12,
      },
      dark: {
        backgroundColor: neutral1,
        backgroundColorHover: neutral1,
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral12,
        colorHover: neutral12,
      },
    },
    iCss: (iColorTheme, iProps) => ({
      backgroundColor: iColorTheme.backgroundColor,
      borderRadius: shouldRenderCssProp(iProps.hasBorderRadius, `4px`),
      padding: shouldRenderCssProp(iProps.hasPadding, '8px'),
      margin: shouldRenderCssProp(iProps.hasMargin, '8px'),
      filter: shouldRenderCssProp(iProps.hasDropShadow, `drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))`),
    }),
  },
  iStyleProps: {
    hasBorderRadius: true,
    hasPadding: true,
    hasMargin: true,
    hasDropShadow: true,
  },
};

export { table };
