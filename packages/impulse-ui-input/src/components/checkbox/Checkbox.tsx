import React, { FunctionComponent, useMemo } from 'react';
import { IconButton } from '@impulse-ui/buttons';
import { useComponentStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { CheckboxProps } from '@impulse-ui/types';

import { useCheckbox } from '../../hooks';
import { checkboxChecked, checkboxUnchecked } from '../../icons';
import { checkboxComponentMap } from '../../maps';
import { checkboxStyle, checkboxStyleProps } from '../../styles';

const Checkbox: FunctionComponent<CheckboxProps> = ({ iStyle, iProps, children, ...rest }) => {
  const {
    mainContainerStyle,
    iconButtonStyle,
    typographyStyle,
    mainContainerStyleProps,
    iconButtonStyleProps,
    typographyStyleProps,
  } = useComponentStyle(checkboxComponentMap, rest, checkboxStyle, checkboxStyleProps, iStyle, iProps);

  const { isChecked, label, toggleCheckbox, buttonProps } = useCheckbox(rest);

  const renderCheckboxLabel = useMemo(() => {
    if (children) {
      return children;
    }

    return (
      <Typography iStyle={typographyStyle} iProps={typographyStyleProps}>
        {label}
      </Typography>
    );
  }, [children, label, typographyStyle, typographyStyleProps]);

  return (
    <Container iStyle={mainContainerStyle} iProps={mainContainerStyleProps}>
      <IconButton
        iStyle={iconButtonStyle}
        iProps={iconButtonStyleProps}
        onClick={toggleCheckbox}
        icon={isChecked ? checkboxChecked : checkboxUnchecked}
        {...buttonProps}
      />
      {renderCheckboxLabel}
    </Container>
  );
};

export { Checkbox };
