import { neutral } from '@impulse-ui/colours';
import { ComponentStyleProps, ContainerStyleProps, IOStyle } from '@impulse-ui/types';

const impulseTableContainerStyle: IOStyle<ContainerStyleProps> = {
  iColorTheme: { light: { backgroundColor: neutral[10], backgroundColorHover: neutral[10] } },
};
const impulseTableContainerProps: ComponentStyleProps<ContainerStyleProps> = {
  hasDropShadow: true,
  hasBorderRadius: true,
};

export { impulseTableContainerProps, impulseTableContainerStyle };
