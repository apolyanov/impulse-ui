import { ContainerStyleProps } from '../layout';
import { shouldRenderCssProp } from '../theme';
import { IOProps, IOStyle } from '../types';

const mainContainerStyle: IOStyle<ContainerStyleProps> = {
  iCss: (iColorTheme, iProps) => ({
    maxWidth: '300px',
    minWidth: '48px',
    width: '220px',
    margin: shouldRenderCssProp(iProps.hasMargin, '8px'),
    padding: shouldRenderCssProp(iProps.hasPadding, '2px 8px'),
    alignItems: 'center',
  }),
};

const mainContainerStyleProps: IOProps<ContainerStyleProps> = {
  hasDropShadow: true,
  hasMargin: false,
  hasPadding: true,
};

export { mainContainerStyle, mainContainerStyleProps };
