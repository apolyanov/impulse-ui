'use client';
import {
  ChangeEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { autoUpdate, offset, size, useFloating } from '@floating-ui/react-dom';
import { useElementDimensions, useItemSelection, useOutsideClick, useVirtualizedList } from '@impulse-ui/core';
import { AutoCompleteRestProps, InnerSimpleOption } from '@impulse-ui/types';

import { processOptions } from '../helpers';

const useAutoComplete = <T>(rest: AutoCompleteRestProps<T>) => {
  const {
    options,
    getOptionValue,
    getOptionLabel,
    getOptionId,
    inputProps,
    onOptionSelect,
    selectOnBlur,
    loading,
    disableAutoFiltering,
    ...mainContainerProps
  } = rest;

  const processedOptions = useMemo(
    () => processOptions(options, getOptionValue, getOptionLabel, getOptionId),
    [getOptionValue, getOptionLabel, getOptionId, options],
  );

  const [showOptions, setShowOptions] = useState<boolean>(false);

  const [selectOptions, setSelectOptions] = useState<InnerSimpleOption[]>([]);
  const [filteredOptions, setFilteredOptions] = useState<InnerSimpleOption[]>([]);

  const [inputValue, setInputValue] = useState<InputHTMLAttributes<HTMLInputElement>['value']>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const getOptionsToShow = useMemo(
    () => (disableAutoFiltering ? selectOptions : filteredOptions),
    [disableAutoFiltering, filteredOptions, selectOptions],
  );

  const {
    highlightNextIndex,
    highlightPrevIndex,
    highlightedIndex,
    isItemSelected,
    selectItem,
    selectedItem,
    getHighlightedItem,
    resetSelection,
    updateHighlightedIndex,
  } = useItemSelection(getOptionsToShow, {
    getItemId: (item) => item.uuid,
  });

  const { refs, floatingStyles } = useFloating({
    placement: 'bottom',
    middleware: [
      size({
        apply({ elements }) {
          elements.floating.style.width = `${elements.reference.getBoundingClientRect().width}px`;
        },
      }),
      offset(4),
    ],
    whileElementsMounted: autoUpdate,
  });

  const { getVirtualItems, listItemStyle, listContainerStyle, scrollTo } = useVirtualizedList({
    scrollElement: refs.floating.current as HTMLElement,
    elementHeight: 38,
    elementsCount: getOptionsToShow.length,
    scrollIndex: highlightedIndex,
    autoScroll: true,
  });

  const dimensions = useElementDimensions(refs.reference.current as HTMLElement);

  useOutsideClick(() => {
    handleInputBlur();

    setShowOptions(false);
  }, [refs.reference.current as HTMLElement, refs.floating.current as HTMLElement]);

  const updateFilteredOptions = useCallback(
    (newOptions: InnerSimpleOption[]) => {
      if (!disableAutoFiltering) {
        setFilteredOptions(newOptions);
      }
    },
    [disableAutoFiltering],
  );

  const handleInputBlur = () => {
    if (!selectedItem) {
      scrollTo(0);
      resetSelection();
      setInputValue('');
      updateFilteredOptions(filterOptions(''));
    } else {
      setInputValue(selectedItem.label);
      updateFilteredOptions(filterOptions('', selectedItem));
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'Escape': {
        if (showOptions) {
          handleInputBlur();

          setShowOptions(false);
        }

        break;
      }
      case 'Tab': {
        const newItem = getHighlightedItem();

        if (newItem && showOptions && selectOnBlur) {
          handleOptionSelect(newItem);
        } else {
          setShowOptions(false);
        }

        break;
      }
      case 'ArrowDown': {
        event.preventDefault();

        if (!showOptions) {
          setShowOptions(true);
        } else {
          highlightNextIndex();
        }

        break;
      }
      case 'ArrowUp': {
        event.preventDefault();

        if (!showOptions) {
          setShowOptions(true);
        } else {
          highlightPrevIndex();
        }

        break;
      }
      case 'ArrowLeft':
      case 'ArrowRight': {
        if (!showOptions) {
          setShowOptions(true);
        }

        break;
      }
      case 'Enter': {
        const newItem = getHighlightedItem();

        if (newItem && showOptions) {
          handleOptionSelect(newItem);
        }

        break;
      }
    }

    inputProps?.onKeyDown?.(event);
  };

  const filterOptions = useCallback(
    (query: string, item?: InnerSimpleOption) => {
      const newFilteredItems = selectOptions.filter(
        (option) => String(option.label).toLowerCase().includes(query.toLowerCase()),
        [],
      );

      updateHighlightedIndex(newFilteredItems, item);

      return newFilteredItems;
    },
    [selectOptions, updateHighlightedIndex],
  );

  const onMouseDown = (event: MouseEvent<HTMLInputElement>) => {
    if (String(inputValue).length === 0) {
      setShowOptions((prevState) => !prevState);
    } else {
      if (!showOptions) {
        setShowOptions(true);
      }
    }

    inputProps?.onMouseDown?.(event);
  };

  const shouldCallOptionSelect = (item: InnerSimpleOption): boolean => item.uuid !== selectedItem?.uuid;

  const handleOptionSelect = (item: InnerSimpleOption) => {
    selectItem(item);
    setInputValue(item.label);
    setShowOptions(false);
    inputRef.current?.focus();

    updateFilteredOptions(filterOptions('', item));

    if (onOptionSelect && shouldCallOptionSelect(item)) {
      onOptionSelect(item.value);
    }
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!showOptions) {
      setShowOptions(true);
    }

    const newInputValue = event.target.value;

    if (newInputValue.length === 0) {
      handleInputClear();
    } else {
      updateFilteredOptions(filterOptions(newInputValue));
      setInputValue(newInputValue);
    }

    if (!inputProps?.onDebouncedChange) {
      inputProps?.onChange?.(event);
    }
  };

  const handleInputClear = () => {
    updateFilteredOptions(selectOptions);

    inputProps?.onClear?.();

    setInputValue('');
    resetSelection();
    scrollTo(0);

    if (selectedItem) {
      onOptionSelect?.(null);
    }
  };

  const updateAutoSelectOptions = useCallback(() => {
    setSelectOptions(processedOptions);
    updateFilteredOptions(processedOptions);
  }, [processedOptions, updateFilteredOptions]);

  useEffect(() => {
    updateAutoSelectOptions();
  }, [updateAutoSelectOptions]);

  useEffect(() => resetSelection(), [options, resetSelection]);

  return {
    handleOnChange,
    onMouseDown,
    handleInputClear,
    handleOptionSelect,
    handleKeyDown,
    getOptionsToShow,
    mainContainerProps,
    inputRef,
    getVirtualItems,
    listItemStyle,
    listContainerStyle,
    scrollTo,
    inputProps,
    loading,
    filteredOptions,
    dimensions,
    inputValue,
    isItemSelected,
    showOptions,
    highlightedIndex,
    containerRefSetter: refs.setReference,
    dropdownRefSetter: refs.setFloating,
    floatingStyles,
  };
};

export { useAutoComplete };
