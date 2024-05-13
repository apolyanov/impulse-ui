import { neutral } from '@impulse-ui/colours';
import { animationHelper } from '@impulse-ui/core';
import { ComponentTheme, ContainerHTMLProps } from '@impulse-ui/types';
import { keyframes } from 'styled-components';

const spinnerAnimation = keyframes`100% {transform: rotate(1turn)}`;

const spinnerLoader: ComponentTheme<ContainerHTMLProps> = {
  iStyle: {
    iColorTheme: {
      light: {
        backgroundColor: neutral[300],
        color: neutral[100],
      },
      dark: {
        backgroundColor: neutral[10],
        color: neutral[100],
      },
    },
    iCss: ({ getThemeColor }) => ({
      width: 20,
      aspectRatio: '1',
      borderRadius: '50%',
      border: '3px solid #0000',
      borderRightColor: getThemeColor('borderRightColor'),
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      animation: animationHelper`${spinnerAnimation} 1s infinite linear`,
      '&:before': {
        content: "''",
        position: 'absolute',
        inset: -3,
        borderRadius: '50%',
        border: 'inherit',
        animation: 'inherit',
        animationDuration: '2s',
      },
      '&:after': {
        content: "''",
        position: 'absolute',
        inset: -3,
        borderRadius: '50%',
        border: 'inherit',
        animation: 'inherit',
        animationDuration: '4s',
      },
    }),
  },
};

export { spinnerLoader };
