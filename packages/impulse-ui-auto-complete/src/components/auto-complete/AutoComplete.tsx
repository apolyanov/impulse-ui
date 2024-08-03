import { useComponentStyle } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { Spinner } from '@impulse-ui/loader';
import { Typography } from '@impulse-ui/text';
import { Fragment, ReactNode, useMemo } from 'react';

import { useAutoComplete } from '../../hooks';
import { autoCompleteComponentMap } from '../../maps';
import { defaultAutoCompleteStyle } from '../../styles';

import { AutoCompleteItem } from './auto-complete-item';
import { AutoCompleteProps } from '../../types';
import { TextInput } from '@impulse-ui/input';

const AutoComplete = <T extends object>({ iStyle, ...rest }: AutoCompleteProps<T>) => {
  const {
    mainContainerStyle,
    textInputStyle,
    autoCompleteItemsContainerStyle,
    autoCompleteItemStyle,
    loadingSpinnerStyle,
    noOptionsTypographyStyle,
  } = useComponentStyle(autoCompleteComponentMap, rest, defaultAutoCompleteStyle, iStyle);

  const {
    containerRefSetter,
    dropdownRefSetter,
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
    showOptions,
    floatingStyles,
  } = useAutoComplete<T>(rest);

  const optionsContainerRenderer = useMemo((): ReactNode | undefined => {
    if (showOptions) {
      if (loading) {
        return <Spinner iStyle={loadingSpinnerStyle} />;
      }

      if (getOptionsToShow.length === 0) {
        return <Typography iStyle={noOptionsTypographyStyle}>No options</Typography>;
      }

      return (
        <Container as='ul' style={{ ...listContainerStyle }}>
          {getVirtualItems().map((virtualRow) => (
            <Container as='li' key={virtualRow.index} style={{ ...listItemStyle(virtualRow) }}>
              <AutoCompleteItem
                highlighted={highlightedIndex === virtualRow.index}
                selected={isItemSelected(getOptionsToShow[virtualRow.index])}
                onClick={() => handleOptionSelect(getOptionsToShow[virtualRow.index])}
                iStyle={autoCompleteItemStyle}
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
    loadingSpinnerStyle,
    noOptionsTypographyStyle,
    listItemStyle,
    highlightedIndex,
    isItemSelected,
    autoCompleteItemStyle,
    handleOptionSelect,
  ]);

  return (
    <Fragment>
      <Container {...mainContainerProps} ref={containerRefSetter} iStyle={mainContainerStyle}>
        <TextInput
          {...inputProps}
          ref={inputRef}
          value={inputValue}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          onMouseDown={onMouseDown}
          onClear={handleInputClear}
          iStyle={textInputStyle}
        />
      </Container>
      {showOptions && (
        <Container style={{ ...floatingStyles }} ref={dropdownRefSetter} iStyle={autoCompleteItemsContainerStyle}>
          {optionsContainerRenderer}
        </Container>
      )}
    </Fragment>
  );
};

export { AutoComplete };
