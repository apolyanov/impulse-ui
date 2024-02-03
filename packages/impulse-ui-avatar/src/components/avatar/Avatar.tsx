'use client';
import React, { FunctionComponent, useMemo } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { AvatarProps } from '@impulse-ui/types';

import { avatarComponentMap } from '../../maps';
import { defaultAvatarStyle } from '../../styles';

const Avatar: FunctionComponent<AvatarProps> = ({ iStyle, iProps, ...rest }) => {
  const { onClick, imageUrl, name } = rest;

  const {
    mainContainerStyle,
    imageContainerStyle,
    typographyStyle,
    iconStyle,
    mainContainerStyleProps,
    imageContainerStyleProps,
    typographyStyleProps,
    iconStyleProps,
  } = useComponentStyle(avatarComponentMap, rest, defaultAvatarStyle, undefined, iStyle, iProps);

  const renderAvatarContent = useMemo(() => {
    if (imageUrl) {
      return <Container iProps={imageContainerStyleProps} iStyle={imageContainerStyle} />;
    }

    if (name) {
      return (
        <Typography iStyle={typographyStyle} iProps={typographyStyleProps}>
          {name}
        </Typography>
      );
    }

    return <Icon icon={faUser} iStyle={iconStyle} iProps={iconStyleProps} />;
  }, [
    iconStyle,
    iconStyleProps,
    imageContainerStyle,
    imageContainerStyleProps,
    imageUrl,
    name,
    typographyStyle,
    typographyStyleProps,
  ]);

  return (
    <Container onClick={onClick} iProps={mainContainerStyleProps} iStyle={mainContainerStyle}>
      {renderAvatarContent}
    </Container>
  );
};

export { Avatar };
