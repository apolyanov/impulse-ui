import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { AvatarProps } from '@impulse-ui/types';
import { FunctionComponent, useMemo } from 'react';

import { avatarComponentMap } from '../../maps';
import { defaultAvatarStyle } from '../../styles';

const Avatar: FunctionComponent<AvatarProps> = ({ iStyle, ...rest }) => {
  const { imageUrl, name, ...containerProps } = rest;

  const { mainContainerStyle, imageContainerStyle, typographyStyle, iconStyle } = useComponentStyle(
    avatarComponentMap,
    rest,
    defaultAvatarStyle,
    iStyle,
  );

  const renderAvatarContent = useMemo(() => {
    if (imageUrl) {
      return <Container iStyle={imageContainerStyle} />;
    }

    if (name) {
      return <Typography iStyle={typographyStyle}>{name}</Typography>;
    }

    return <Icon icon={faUser} iStyle={iconStyle} />;
  }, [iconStyle, imageContainerStyle, imageUrl, name, typographyStyle]);

  return (
    <Container iStyle={mainContainerStyle} {...containerProps}>
      {renderAvatarContent}
    </Container>
  );
};

export { Avatar };
