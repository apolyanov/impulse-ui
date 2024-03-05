'use client';
import React, { Fragment, FunctionComponent, memo, ReactNode, useMemo } from 'react';
import { useComponentStyle } from '@impulse-ui/core';
import { TextInput } from '@impulse-ui/input';
import { Container } from '@impulse-ui/layout';
import { Typography } from '@impulse-ui/text';
import { AutoCompleteProps } from '@impulse-ui/types';

import { useAutoComplete } from '../../hooks';
import { autoCompleteComponentMap } from '../../maps';
import { defaultAutoCompleteStyle, defaultAutoCompleteStyleProps, removeSpacing } from '../../styles';

import { AutoCompleteItem } from './auto-complete-item';

const AutoComplete: FunctionComponent<AutoCompleteProps> = memo(({ iStyle, iProps, ...rest }) => {
  const {
    mainContainerStyle,
    mainContainerStyleProps,
    textInputStyle,
    textInputStyleProps,
    autoCompleteItemsContainerStyle,
    autoCompleteItemsContainerStyleProps,
    autoCompleteItemStyle,
    autoCompleteItemStyleProps,
    loadingTypographyStyle,
    loadingTypographyStyleProps,
    noOptionsTypographyStyleProps,
    noOptionsTypographyStyle,
  } = useComponentStyle(
    autoCompleteComponentMap,
    rest,
    defaultAutoCompleteStyle,
    defaultAutoCompleteStyleProps,
    iStyle,
    iProps,
  );

  const {
    setContainerRef,
    setDropdownRef,
    handleInputClear,
    handleKeyDown,
    handleOptionSelect,
    onMouseDown,
    handleOnChange,
    listItemStyle,
    getVirtualItems,
    getOptionsToShow,
    listContainerStyle,
    mainContainerProps,
    inputProps,
    inputRef,
    loading,
    isItemSelected,
    highlightedIndex,
    inputValue,
    styles,
    showOptions,
    attributes,
  } = useAutoComplete(rest);

  const optionsContainerRenderer = useMemo((): ReactNode | undefined => {
    if (showOptions) {
      if (loading) {
        return (
          <Typography iProps={loadingTypographyStyleProps} iStyle={loadingTypographyStyle}>
            Loading...
          </Typography>
        );
      }

      if (getOptionsToShow.length === 0) {
        return (
          <Typography iProps={noOptionsTypographyStyleProps} iStyle={noOptionsTypographyStyle}>
            No options
          </Typography>
        );
      }

      return (
        <Container iProps={removeSpacing} style={{ ...listContainerStyle }}>
          {getVirtualItems().map((virtualRow) => (
            <Container iProps={removeSpacing} key={virtualRow.index} style={{ ...listItemStyle(virtualRow) }}>
              <AutoCompleteItem
                highlighted={highlightedIndex === virtualRow.index}
                selected={isItemSelected(getOptionsToShow[virtualRow.index])}
                onClick={() => handleOptionSelect(getOptionsToShow[virtualRow.index])}
                iStyle={autoCompleteItemStyle}
                iProps={autoCompleteItemStyleProps}
                itemText={getOptionsToShow[virtualRow.index].label}
              />
            </Container>
          ))}
        </Container>
      );
    }
  }, [
    showOptions,
    loading,
    getOptionsToShow,
    listContainerStyle,
    getVirtualItems,
    loadingTypographyStyleProps,
    loadingTypographyStyle,
    noOptionsTypographyStyleProps,
    noOptionsTypographyStyle,
    listItemStyle,
    highlightedIndex,
    isItemSelected,
    autoCompleteItemStyle,
    autoCompleteItemStyleProps,
    handleOptionSelect,
  ]);

  return (
    <Fragment>
      <Container
        {...mainContainerProps}
        ref={setContainerRef}
        iStyle={mainContainerStyle}
        iProps={mainContainerStyleProps}
      >
        <TextInput
          {...inputProps}
          ref={inputRef}
          value={inputValue}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          onMouseDown={onMouseDown}
          onClear={handleInputClear}
          iStyle={textInputStyle}
          iProps={textInputStyleProps}
        />
      </Container>
      {showOptions && (
        <Container
          ref={setDropdownRef}
          iStyle={autoCompleteItemsContainerStyle}
          iProps={autoCompleteItemsContainerStyleProps}
          style={styles.popper}
          {...attributes.popper}
        >
          {optionsContainerRenderer}
        </Container>
      )}
    </Fragment>
  );
});

export { AutoComplete };
