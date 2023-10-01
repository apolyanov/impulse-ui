import React from 'react';

import { IconStyleProps } from '../../icon';
import { ContainerStyleProps } from '../../layout';
import { TypographyStyleProps } from '../../text';
import { IOProps, IOStyle } from '../../types';

interface AvatarProps extends AvatarRestProps {
  iStyle?: Partial<AvatarStyle>;
  iProps?: Partial<AvatarStyleProps>;
  name?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

type AvatarStyle = {
  mainContainerStyle: IOStyle<ContainerStyleProps, AvatarRestProps>;
  imageContainerStyle: IOStyle<ContainerStyleProps, AvatarRestProps>;
  typographyStyle: IOStyle<TypographyStyleProps, AvatarRestProps>;
  iconStyle: IOStyle<IconStyleProps, AvatarRestProps>;
};

type AvatarStyleProps = {
  mainContainerStyleProps: IOProps<ContainerStyleProps>;
  imageContainerStyleProps: IOProps<ContainerStyleProps>;
  typographyStyleProps: IOProps<TypographyStyleProps>;
  iconStyleProps: IOProps<IconStyleProps>;
};

type UseAvatarStyleFnProps = AvatarStyle & AvatarStyleProps;

interface AvatarRestProps {
  imageUrl?: string;
}

interface UseAvatarStyleFn {
  (
    rest: AvatarRestProps,
    iStyle?: Partial<AvatarStyle>,
    iProps?: Partial<AvatarStyleProps>,
  ): Partial<UseAvatarStyleFnProps>;
}

export type { AvatarProps, AvatarRestProps, AvatarStyle, AvatarStyleProps, UseAvatarStyleFn, UseAvatarStyleFnProps };
