import { IconButton } from '@impulse-ui/buttons';
import { useComponentStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { CheckboxProps } from '@impulse-ui/types';
import { FunctionComponent, useMemo } from 'react';

import { useCheckbox } from '../../hooks';
import { checkboxChecked, checkboxUnchecked } from '../../icons';
import { checkboxComponentMap } from '../../maps';
import { checkboxStyle } from '../../styles';

const Checkbox: FunctionComponent<CheckboxProps> = ({ iStyle, children, ...rest }) => {
  const { mainContainerStyle, iconButtonStyle, typographyStyle } = useComponentStyle(
    checkboxComponentMap,
    rest,
    checkboxStyle,
    iStyle,
  );

  const { label, toggleCheckbox, buttonProps, getCheckedState } = useCheckbox(rest);

  const renderCheckboxLabel = useMemo(() => {
    if (children) {
      return children;
    }

    return <Typography iStyle={typographyStyle}>{label}</Typography>;
  }, [children, label, typographyStyle]);

  return (
    <Container iStyle={mainContainerStyle}>
      <IconButton
        iStyle={iconButtonStyle}
        onClick={toggleCheckbox}
        icon={getCheckedState() ? checkboxChecked : checkboxUnchecked}
        {...buttonProps}
      />
      {renderCheckboxLabel}
    </Container>
  );
};

export { Checkbox };
