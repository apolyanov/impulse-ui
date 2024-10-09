import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { FunctionComponent, useMemo } from 'react';
import { AvatarProps } from '../../types';

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
      return <Container iCss={imageContainerStyle.iCss} iTheme={imageContainerStyle.iTheme} />;
    }

    if (name) {
      return (
        <Typography iCss={typographyStyle.iCss} iTheme={typographyStyle.iTheme}>
          {name}
        </Typography>
      );
    }

    return <Icon icon={faUser} iCss={iconStyle.iCss} iTheme={iconStyle.iTheme} />;
  }, [iconStyle, imageContainerStyle, imageUrl, name, typographyStyle]);

  return (
    <Container iCss={mainContainerStyle.iCss} iTheme={mainContainerStyle.iTheme} {...containerProps}>
      {renderAvatarContent}
    </Container>
  );
};

export { Avatar };
