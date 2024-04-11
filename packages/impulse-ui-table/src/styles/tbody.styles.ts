import { neutral } from '@impulse-ui/colours';
import { ComponentTheme, TBodyStyle } from '@impulse-ui/types';

const baseTBody: ComponentTheme = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral[200],
        colorHover: neutral[200],
      },
      dark: {
        backgroundColor: 'transparent',
        backgroundColorHover: 'transparent',
        borderColor: 'transparent',
        borderColorHover: 'transparent',
        color: neutral[200],
        colorHover: neutral[200],
      },
    },
    iCss: ({ iColorTheme }) => ({
      backgroundColor: iColorTheme.backgroundColor,
    }),
  },
};

const tbody: Partial<TBodyStyle> = {
  noContentTdataStyle: {
    iCss: {
      width: '100%',
      height: 300,
      textAlign: 'center',
    },
  },
  noContentIconStyle: { iColorTheme: { light: { color: neutral[80] } }, iCss: { fontSize: 56 } },
  noContentTypographyStyle: { iCss: { marginTop: 8 } },
};

export { baseTBody, tbody };
