import { neutral7, volcano1, volcano6 } from '@impulse-ui/colours';
import { shouldRenderCssProp } from '@impulse-ui/core';
import { AvatarStyle } from '@impulse-ui/types';

const defaultAvatarStyle: Partial<AvatarStyle> = {
  mainContainerStyle: {
    iColorTheme: { light: { borderColor: volcano6, backgroundColor: volcano1 } },
    iCss: ({ iColorTheme, iProps }) => ({
      border: `2px solid ${iColorTheme.borderColor}`,
      filter: shouldRenderCssProp(iProps.hasDropShadow, `drop-shadow(0 2px 2px ${neutral7})`),
      width: '48px',
      margin: 0,
      height: '48px',
      padding: '2px',
      borderRadius: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      transition: 'border-width 0.1s ease-in-out',
      '&:hover': {
        cursor: 'pointer',
        borderWidth: '4px',
      },
    }),
  },
  imageContainerStyle: {
    iCss: ({ parentProps }) => ({
      margin: 0,
      borderRadius: '50%',
      width: '100%',
      height: '100%',
      backgroundColor: 'inherit',
      backgroundSize: 'cover',
      backgroundImage: `url("${parentProps?.imageUrl}")`,
    }),
  },
  typographyStyle: {
    iCss: {
      color: volcano6,
      fontWeight: 'bold',
    },
  },
  iconStyle: {
    iCss: {
      color: volcano6,
      fontWeight: 'bold',
      height: '24px',
      width: '24px',
    },
  },
};

export { defaultAvatarStyle };
