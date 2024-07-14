import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@impulse-ui/buttons';
import { extractCssProps, useComponentStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Container } from '@impulse-ui/layout';
import { ERROR, FieldMessage } from '@impulse-ui/text';
import { TextInputProps } from '@impulse-ui/types';
import { debounce, isNil } from 'lodash-es';
import React, {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import { textInputComponentMap } from '../../maps';
import { textInputStyle } from '../../styles';

import BaseTextInput from './BaseTextInput.styles';

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ iStyle, ...rest }, ref?: ForwardedRef<HTMLInputElement>) => {
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

    const { mainContainerStyle, inputContainerStyle, inputStyle, iconStyle, fieldMessageStyle, clearIconStyle } =
      useComponentStyle(textInputComponentMap, rest, textInputStyle, iStyle);

    const [innerValue, setInnerValue] = useState<InputHTMLAttributes<HTMLInputElement>['value']>(defaultValue ?? '');
    const innerRef = useRef<HTMLInputElement | null>(null);

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

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
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
      <Container iStyle={mainContainerStyle}>
        <Container data-disabled={inputProps.disabled} iStyle={inputContainerStyle}>
          {icon && <Icon data-disabled={inputProps.disabled} iStyle={iconStyle} icon={icon} />}
          <BaseTextInput
            ref={innerRef}
            {...inputProps}
            $iStyle={inputStyle}
            $cssProps={extractCssProps(inputProps)}
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
              icon={clearIcon ?? faXmark}
            />
          )}
        </Container>
        {error && <FieldMessage iStyle={fieldMessageStyle} type={ERROR} message={errorMessage} />}
      </Container>
    );
  },
);

export { TextInput };
