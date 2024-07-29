import { useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Container } from '@impulse-ui/layout';
import { Spinner } from '@impulse-ui/loader';
import { Typography } from '@impulse-ui/text';
import { SelectProps } from '@impulse-ui/types';
import { Fragment, ReactNode, useMemo } from 'react';

import { useSelect } from '../../hooks';
import { selectComponentMap } from '../../maps';
import { select } from '../../styles';

import { SelectOption } from './select-option';
import { ClearButton } from '../common';

const Select = <T extends object>({ iStyle, ...rest }: SelectProps<T>) => {
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
    clearButtonProps,
    resetSelection,
    handleSelectClear,
    ...containerProps
  } = useSelect(rest);

  const {
    selectOptionStyle,
    noOptionsTypographyStyle,
    loadingSpinnerStyle,
    selectOptionsContainerStyle,
    selectPlaceholderStyle,
    mainContainerStyle,
    selectedItemTypographyStyle,
    dropdownIconStyle,
    clearIconStyle,
  } = useComponentStyle(selectComponentMap, rest, iStyle, select);

  const optionsContainerRenderer = useMemo((): ReactNode | undefined => {
    if (showOptions) {
      if (loading) {
        return <Spinner iStyle={loadingSpinnerStyle} />;
      }

      if (processedOptions.length === 0) {
        return <Typography iStyle={noOptionsTypographyStyle}>No options</Typography>;
      }

      return (
        <Container role={'listbox'} as='ul' style={{ ...listContainerStyle }}>
          {getVirtualItems().map((virtualRow) => (
            <Container role={'option'} as='li' key={virtualRow.index} style={{ ...listItemStyle(virtualRow) }}>
              <SelectOption
                highlighted={highlightedIndex === virtualRow.index}
                selected={isItemSelected(processedOptions[virtualRow.index])}
                onClick={() => handleOptionSelect(processedOptions[virtualRow.index])}
                iStyle={selectOptionStyle}
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
    loadingSpinnerStyle,
    noOptionsTypographyStyle,
    listItemStyle,
    highlightedIndex,
    isItemSelected,
    selectOptionStyle,
    handleOptionSelect,
  ]);

  return (
    <Fragment>
      <Container
        {...containerProps}
        role={'combobox'}
        onKeyDown={handleKeyDown}
        onMouseDown={onMouseDown}
        iStyle={mainContainerStyle}
        ref={containerRefSetter}
      >
        {placeholder && !selectedItem && <Typography iStyle={selectPlaceholderStyle}>{placeholder}</Typography>}
        {selectedItem && <Typography iStyle={selectedItemTypographyStyle}>{selectedItem.label}</Typography>}
        <ClearButton
          onMouseDown={handleSelectClear}
          iStyle={clearIconStyle}
          clearable={isInputClearable()}
          focusable={clearButtonProps?.focusable}
          clearIcon={clearButtonProps?.clearIcon}
        />
        <Icon iStyle={dropdownIconStyle} icon={getDropdownIcon()} />
      </Container>
      {showOptions && (
        <Container style={{ ...floatingStyles }} iStyle={selectOptionsContainerStyle} ref={dropdownRefSetter}>
          {optionsContainerRenderer}
        </Container>
      )}
    </Fragment>
  );
};

export { Select };
