import { KeyboardEvent, MouseEvent, useState } from 'react';
import { autoUpdate, offset, size, useFloating } from '@floating-ui/react-dom';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useItemSelection, useOutsideClick, useProcessedOptions, useVirtualizedList } from '@impulse-ui/core';
import { InnerSimpleOption, SelectRestProps } from '@impulse-ui/types';

const useSelect = <T>(props: SelectRestProps<T>) => {
  const { options, getOptionValue, getOptionId, getOptionLabel, onOptionSelect, selectOnBlur, ...rest } = props;
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
    resetSelection,
  } = useItemSelection(processedOptions, {
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

  const shouldCallOptionSelect = (item: InnerSimpleOption): boolean => item.uuid !== selectedItem?.uuid;

  const handleOptionSelect = (item: InnerSimpleOption) => {
    selectItem(item);
    setShowOptions(false);

    if (onOptionSelect && shouldCallOptionSelect(item)) {
      onOptionSelect(item.value);
    }
  };

  const onMouseDown = (event: MouseEvent<HTMLInputElement>) => {
    if (!selectedItem) {
      setShowOptions((prevState) => !prevState);
    } else {
      if (!showOptions) {
        setShowOptions(true);
      }
    }

    rest?.onMouseDown?.(event);
  };

  const getDropdownIcon = () => (showOptions ? faAngleUp : faAngleDown);

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
