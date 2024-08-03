import React from 'react';
import { IOStyle } from '@impulse-ui/core';

interface AvatarProps extends AvatarRestProps {
  iStyle?: Partial<AvatarStyle>;
  name?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

type AvatarStyle = {
  mainContainerStyle: IOStyle<AvatarRestProps>;
  imageContainerStyle: IOStyle<AvatarRestProps>;
  typographyStyle: IOStyle<AvatarRestProps>;
  iconStyle: IOStyle<AvatarRestProps>;
};

interface AvatarRestProps {
  imageUrl?: string;
}

export type { AvatarProps, AvatarRestProps, AvatarStyle };
