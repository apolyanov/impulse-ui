import { neutral1 } from '@impulse-ui/colours';
import { shouldRenderCssProp } from '@impulse-ui/core';
import { SidebarStyle, SidebarStyleProps } from '@impulse-ui/types';

const defaultSidebarStyle: Partial<SidebarStyle> = {
  containerStyle: {
    iColorTheme: {
      light: {
        backgroundColor: neutral1,
      },
    },
    iCss: ({ iProps }) => ({
      maxWidth: '300px',
      minWidth: '48px',
      width: '220px',
      margin: shouldRenderCssProp(iProps.hasMargin, '8px'),
      padding: shouldRenderCssProp(iProps.hasPadding, '2px 8px'),
      alignItems: 'center',
    }),
  },
};

const defaultSidebarStyleProps: Partial<SidebarStyleProps> = {
  containerStyleProps: {
    hasDropShadow: true,
    hasMargin: false,
    hasPadding: true,
  },
};

export { defaultSidebarStyle, defaultSidebarStyleProps };
