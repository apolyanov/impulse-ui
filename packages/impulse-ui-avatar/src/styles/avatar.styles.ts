import { volcano } from '@impulse-ui/colours';
import { AvatarStyle } from '@impulse-ui/types';

const defaultAvatarStyle: Partial<AvatarStyle> = {
  mainContainerStyle: {
    iColorTheme: { light: { borderColor: volcano[60], backgroundColor: volcano[10] } },
    iCss: ({ iColorTheme }) => ({
      border: `2px solid ${iColorTheme.borderColor}`,
      filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
      width: '48px',
      margin: 0,
      height: '48px',
      padding: '2px',
      borderRadius: '50%',
      display: 'flex',
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
    iCss: ({ imageUrl }) => ({
      margin: 0,
      borderRadius: '50%',
      width: '100%',
      height: '100%',
      backgroundColor: 'inherit',
      backgroundSize: 'cover',
      backgroundImage: `url("${imageUrl}")`,
    }),
  },
  typographyStyle: {
    iCss: {
      color: volcano[60],
      fontWeight: 'bold',
    },
  },
  iconStyle: {
    iCss: {
      color: volcano[60],
      fontWeight: 'bold',
      height: '24px',
      width: '24px',
    },
  },
};

export { defaultAvatarStyle };
