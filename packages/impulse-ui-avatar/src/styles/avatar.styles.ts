import { volcano } from '@impulse-ui/colours';
import { AvatarStyle } from '../types';

const defaultAvatarStyle: Partial<AvatarStyle> = {
  mainContainerStyle: {
    iTheme: { light: { borderColor: volcano[60], backgroundColor: volcano[10] } },
    iCss: ({ iTheme }) => ({
      border: `2px solid ${iTheme.borderColor}`,
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
