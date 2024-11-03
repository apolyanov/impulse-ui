import { IconButton } from '@impulse-ui/buttons';
import { classnames, useStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { useMemo } from 'react';
import { CheckboxProps } from '../../types';

import { useCheckbox } from '../../hooks';
import { checkboxChecked, checkboxUnchecked } from '../../icons';
import { checkboxStyle } from '../../styles';

const Checkbox = ({ iCss, iTheme, children, ...rest }: CheckboxProps) => {
  const iStyle = useStyle(rest, checkboxStyle, iCss, iTheme);
  const className = classnames('IMUI-Checkbox', rest.className);
  const { label, toggleCheckbox, buttonProps, getCheckedState } = useCheckbox(rest);

  const renderCheckboxLabel = useMemo(() => {
    if (children) {
      return children;
    }

    return <Typography className='IMUI-Checkbox-label'>{label}</Typography>;
  }, [children, label]);

  return (
    <Container iCss={iStyle?.iCss} iTheme={iStyle?.iTheme} className={className}>
      <IconButton
        onClick={toggleCheckbox}
        icon={getCheckedState() ? checkboxChecked : checkboxUnchecked}
        {...buttonProps}
        className='IMUI-Checkbox-icon-button'
      />
      {renderCheckboxLabel}
    </Container>
  );
};

export { Checkbox };
