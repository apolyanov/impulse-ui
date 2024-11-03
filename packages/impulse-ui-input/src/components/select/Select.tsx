import { Icon } from '@impulse-ui/icon';
import { Container } from '@impulse-ui/layout';
import { Spinner } from '@impulse-ui/loader';
import { Typography } from '@impulse-ui/text';
import { Fragment, ReactNode, useMemo } from 'react';

import { useSelect } from '../../hooks';

import { SelectProps } from '../../types';
import { ClearButton } from '../common';
import { SelectOption } from './select-option';
import { classnames, useStyle } from '@impulse-ui/core';
import { select } from '../../styles';

const Select = <T extends object>({ iCss, iTheme, ...rest }: SelectProps<T>) => {
  const {
    showOptions,
    floatingStyles,
    processedOptions,
    dropdownRefSetter,
    getVirtualItems,
    listItemStyle,
    isItemSelected,
    listContainerStyle,
    containerRefSetter,
    highlightedIndex,
    loading,
    handleOptionSelect,
    handleKeyDown,
    onMouseDown,
    selectedItem,
    placeholder,
    getDropdownIcon,
    isInputClearable,
    clearButton,
    resetSelection,
    handleSelectClear,
    ...containerProps
  } = useSelect(rest);

  const className = classnames('IMUI-Select-root', rest.className);
  const iStyle = useStyle(rest, select, iCss, iTheme);

  const optionsContainerRenderer = useMemo((): ReactNode | undefined => {
    if (showOptions) {
      if (loading) {
        return <Spinner />;
      }

      if (processedOptions.length === 0) {
        return <Typography>No options</Typography>;
      }

      return (
        <Container role={'listbox'} as='ul' style={{ ...listContainerStyle }}>
          {getVirtualItems().map((virtualRow) => (
            <Container role={'option'} as='li' key={virtualRow.index} style={{ ...listItemStyle(virtualRow) }}>
              <SelectOption
                highlighted={highlightedIndex === virtualRow.index}
                selected={isItemSelected(processedOptions[virtualRow.index])}
                onClick={() => handleOptionSelect(processedOptions[virtualRow.index])}
                itemText={processedOptions[virtualRow.index].label}
              />
            </Container>
          ))}
        </Container>
      );
    }
  }, [
    showOptions,
    loading,
    processedOptions,
    listContainerStyle,
    getVirtualItems,
    listItemStyle,
    highlightedIndex,
    isItemSelected,
    handleOptionSelect,
  ]);

  return (
    <Fragment>
      <Container
        iCss={iStyle?.iCss}
        iTheme={iStyle?.iTheme}
        {...containerProps}
        className={className}
        role={'combobox'}
        onKeyDown={handleKeyDown}
        onMouseDown={onMouseDown}
        ref={containerRefSetter}
      >
        {placeholder && !selectedItem && <Typography>{placeholder}</Typography>}
        {selectedItem && <Typography className='IMUI-Select-selected-value'>{selectedItem.label}</Typography>}
        <ClearButton
          className='IMUI-Select-clear-button'
          onMouseDown={handleSelectClear}
          clearable={isInputClearable()}
          focusable={clearButton?.focusable}
          clearIcon={clearButton?.clearIcon}
        />
        <Icon icon={getDropdownIcon()} />
      </Container>
      {showOptions && (
        <Container style={{ ...floatingStyles }} ref={dropdownRefSetter}>
          {optionsContainerRenderer}
        </Container>
      )}
    </Fragment>
  );
};

export { Select };
