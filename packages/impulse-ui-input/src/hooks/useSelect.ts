import { KeyboardEvent, MouseEvent, useEffect, useState } from 'react';
import { autoUpdate, offset, size, useFloating } from '@floating-ui/react-dom';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import {
  optionProcessor,
  useItemSelection,
  useOutsideClick,
  useProcessedOptions,
  useVirtualizedList,
} from '@impulse-ui/core';
import { SelectRestProps, SimpleOption } from '@impulse-ui/types';

const useSelect = <T>(props: SelectRestProps<T>) => {
  const { options, getOptionValue, getOptionId, getOptionLabel, onOptionSelect, selectOnBlur, value, ...rest } = props;
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const processedOptions = useProcessedOptions<T>({ options, getOptionValue, getOptionId, getOptionLabel });
  const {
    highlightNextIndex,
    highlightPrevIndex,
    highlightedIndex,
    isItemSelected,
    selectItem,
    selectedItem,
    getHighlightedItem,
    updateHighlightedIndex,
    resetSelection,
  } = useItemSelection(processedOptions, {
    getItemId: (item) => item.id,
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
    elementsCount: processedOptions.length,
    scrollIndex: highlightedIndex,
    autoScroll: true,
  });

  useOutsideClick(() => {
    handleInputBlur();

    setShowOptions(false);
  }, [refs.reference.current as HTMLElement, refs.floating.current as HTMLElement]);

  const handleInputBlur = () => {
    if (!selectedItem) {
      scrollTo(0);
      resetSelection();
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'Tab': {
        const newItem = getHighlightedItem();

        if (newItem && showOptions && selectOnBlur) {
          handleOptionSelect(newItem);
        } else {
          setShowOptions(false);
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
      case 'Escape': {
        if (showOptions) {
          handleInputBlur();

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
    }
  };

  const shouldCallOptionSelect = (item: SimpleOption): boolean => item.id !== selectedItem?.id;

  const handleOptionSelect = (item: SimpleOption) => {
    selectItem(item);
    setShowOptions(false);
    updateHighlightedIndex(processedOptions, item);

    if (onOptionSelect && shouldCallOptionSelect(item)) {
      onOptionSelect(item);
    }
  };

  const onMouseDown = (event: MouseEvent<HTMLInputElement>) => {
    setShowOptions((prevState) => !prevState);
    rest?.onMouseDown?.(event);
  };

  const getDropdownIcon = () => (showOptions ? faAngleUp : faAngleDown);

  useEffect(() => {
    if (value) {
      const processedValue = optionProcessor(value, value?.id ?? -1, getOptionValue, getOptionLabel, getOptionId);

      console.log(processedValue);

      selectItem(processedValue);
      updateHighlightedIndex(processedOptions, processedValue);
    }
  }, [getOptionId, getOptionLabel, getOptionValue, processedOptions, selectItem, updateHighlightedIndex, value]);

  useEffect(() => resetSelection(), [options, resetSelection]);

  return {
    processedOptions,
    showOptions,
    floatingStyles,
    containerRefSetter: refs.setReference,
    dropdownRefSetter: refs.setFloating,
    highlightedIndex,
    isItemSelected,
    listContainerStyle,
    getVirtualItems,
    listItemStyle,
    handleOptionSelect,
    handleKeyDown,
    onMouseDown,
    selectedItem,
    getDropdownIcon,
    ...rest,
  };
};

export { useSelect };
