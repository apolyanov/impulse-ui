import { Container } from '@impulse-ui/layout';
import { Spinner } from '@impulse-ui/loader';
import { Typography } from '@impulse-ui/text';
import { Fragment, ReactNode, useMemo } from 'react';

import { useAutoComplete } from '../../hooks';

import { TextInput } from '@impulse-ui/input';
import { AutoCompleteProps } from '../../types';
import { AutoCompleteItem } from './auto-complete-item';

const AutoComplete = <T extends object>({ iCss, iTheme, ...rest }: AutoCompleteProps<T>) => {
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
        return <Spinner />;
      }

      if (getOptionsToShow.length === 0) {
        return <Typography>No options</Typography>;
      }

      return (
        <Container as='ul' style={{ ...listContainerStyle }}>
          {getVirtualItems().map((virtualRow) => (
            <Container as='li' key={virtualRow.index} style={{ ...listItemStyle(virtualRow) }}>
              <AutoCompleteItem
                highlighted={highlightedIndex === virtualRow.index}
                selected={isItemSelected(getOptionsToShow[virtualRow.index])}
                onClick={() => handleOptionSelect(getOptionsToShow[virtualRow.index])}
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
    listItemStyle,
    highlightedIndex,
    isItemSelected,
    handleOptionSelect,
  ]);

  return (
    <Fragment>
      <Container {...mainContainerProps} ref={containerRefSetter}>
        <TextInput
          {...inputProps}
          ref={inputRef}
          value={inputValue}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          onMouseDown={onMouseDown}
          onClear={handleInputClear}
        />
      </Container>
      {showOptions && (
        <Container style={{ ...floatingStyles }} ref={dropdownRefSetter}>
          {optionsContainerRenderer}
        </Container>
      )}
    </Fragment>
  );
};

export { AutoComplete };
