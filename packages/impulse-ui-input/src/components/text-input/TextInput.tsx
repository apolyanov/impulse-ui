import React, {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@impulse-ui/buttons';
import { useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Container } from '@impulse-ui/layout';
import { FieldMessage } from '@impulse-ui/text';
import { FieldMessageType, HandleInputFn, InputValue, TextInputProps } from '@impulse-ui/types';
import debounce from 'lodash/debounce';
import isNil from 'lodash/isNil';

import { textInputStyle, textInputStyleProps } from '../../styles';

import BaseTextInput from './BaseTextInput.styles';
import { textInputComponentMap } from './theme.map';

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ iStyle, iProps, ...rest }, ref?: ForwardedRef<HTMLInputElement>) => {
    const {
      value,
      onChange,
      debounced,
      onDebouncedChange,
      debounceDelay = 300,
      icon,
      clearIcon,
      isClearIconFocusable,
      clearable,
      onClear,
      name,
      type,
      placeholder,
      defaultValue,
      error,
      errorMessage = 'Invalid field!',
      ...inputProps
    } = rest;

    const {
      mainContainerStyle,
      inputContainerStyle,
      inputStyle,
      iconStyle,
      fieldMessageStyle,
      clearIconStyle,
      mainContainerStyleProps,
      inputContainerStyleProps,
      inputStyleProps,
      iconStyleProps,
      fieldMessageStyleProps,
      clearIconStyleProps,
    } = useComponentStyle(textInputComponentMap, rest, textInputStyle, textInputStyleProps, iStyle, iProps);

    const [innerValue, setInnerValue] = useState<InputValue>(defaultValue ?? '');
    const innerRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(
      ref,
      () => {
        return innerRef.current as HTMLInputElement;
      },
      [],
    );

    const onInputCallback = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => onDebouncedChange?.(event),
      [onDebouncedChange],
    );

    const handleInput: HandleInputFn = (event: ChangeEvent<HTMLInputElement>) => {
      if (!value) {
        setInnerValue(event.target.value);
      }

      onChange?.(event);
      debounceInput?.(event);
    };

    const handleClear = () => {
      onClear?.();

      innerRef.current?.focus();

      if (!value) {
        setInnerValue('');
      }
    };

    const debounceInput = useMemo(
      () => debounce((event: ChangeEvent<HTMLInputElement>) => onInputCallback(event), debounceDelay),
      [debounceDelay, onInputCallback],
    );

    const isInputClearable = (): boolean => {
      if (!isNil(value)) {
        return Boolean(clearable && String(value).length > 0);
      }

      return Boolean(clearable && String(innerValue).length > 0);
    };

    return (
      <Container iStyle={mainContainerStyle} iProps={mainContainerStyleProps}>
        <Container iStyle={inputContainerStyle} iProps={inputContainerStyleProps}>
          {icon && <Icon iStyle={iconStyle} iProps={iconStyleProps} icon={icon} />}
          <BaseTextInput
            ref={innerRef}
            {...inputProps}
            $iStyle={inputStyle}
            $iProps={inputStyleProps}
            name={name}
            value={value ?? innerValue}
            onChange={handleInput}
            type={type}
            placeholder={placeholder}
          />
          {isInputClearable() && (
            <IconButton
              tabIndex={isClearIconFocusable ? 0 : -1}
              onClick={handleClear}
              iStyle={clearIconStyle}
              iProps={clearIconStyleProps}
              icon={clearIcon ?? faXmark}
            />
          )}
        </Container>
        {error && (
          <FieldMessage
            iStyle={fieldMessageStyle}
            iProps={fieldMessageStyleProps}
            type={FieldMessageType.ERROR}
            message={errorMessage}
          />
        )}
      </Container>
    );
  },
);

export { TextInput };
