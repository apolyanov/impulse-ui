import React, { Fragment, ReactNode, useMemo } from 'react';
import { useComponentStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { SelectProps } from '@impulse-ui/types';

import { useSelect } from '../../hooks';
import { selectComponentMap } from '../../maps';
import { select } from '../../styles';

import { SelectOption } from './select-option';

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
  } = useSelect(rest);

  const {
    selectOptionStyle,
    noOptionsTypographyStyle,
    loadingTypographyStyle,
    selectOptionsContainerStyle,
    mainContainerStyle,
  } = useComponentStyle(selectComponentMap, rest, iStyle, select);

  const optionsContainerRenderer = useMemo((): ReactNode | undefined => {
    if (showOptions) {
      if (loading) {
        return <Typography iStyle={loadingTypographyStyle}>Loading...</Typography>;
      }

      if (processedOptions.length === 0) {
        return <Typography iStyle={noOptionsTypographyStyle}>No options</Typography>;
      }

      return (
        <Container as='ul' style={{ ...listContainerStyle }}>
          {getVirtualItems().map((virtualRow) => (
            <Container as='li' key={virtualRow.index} style={{ ...listItemStyle(virtualRow) }}>
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
    loadingTypographyStyle,
    noOptionsTypographyStyle,
    listItemStyle,
    highlightedIndex,
    isItemSelected,
    selectOptionStyle,
    handleOptionSelect,
  ]);

  const getSelectedItem = useMemo(() => {
    if (selectedItem) return selectedItem.label;
    if (placeholder) return placeholder;

    return '';
  }, [placeholder, selectedItem]);

  return (
    <Fragment>
      <Container
        onKeyDown={handleKeyDown}
        onMouseDown={onMouseDown}
        iStyle={mainContainerStyle}
        ref={containerRefSetter}
      >
        {getSelectedItem}
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
