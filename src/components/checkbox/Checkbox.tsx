import React, { FunctionComponent, useMemo } from 'react';

import { checkboxChecked } from '../../assets';
import { checkboxUnchecked } from '../../assets';
import { IconButton } from '../buttons';
import { Container } from '../layout';
import { Typography } from '../text';
import { useCheckbox } from '../utils';
import { useComponentStyle } from '../utils';

import { defaultCheckboxStyle, defaultCheckboxStyleProps } from './defaultCheckbox.styles';
import { checkboxComponentMap } from './theme.map';
import { CheckboxProps } from './types';

const Checkbox: FunctionComponent<CheckboxProps> = ({ iStyle, iProps, children, ...rest }) => {
  const {
    mainContainerStyle,
    iconButtonStyle,
    typographyStyle,
    mainContainerStyleProps,
    iconButtonStyleProps,
    typographyStyleProps,
  } = useComponentStyle(checkboxComponentMap, rest, defaultCheckboxStyle, defaultCheckboxStyleProps, iStyle, iProps);

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
