import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@impulse-ui/buttons';
import { classnames, extractCssProps, useStyle } from '@impulse-ui/core';
import { Icon } from '@impulse-ui/icon';
import { Container } from '@impulse-ui/layout';
import { ERROR, FieldMessage } from '@impulse-ui/text';
import debounce from 'lodash-es/debounce';
import isNil from 'lodash-es/isNil';
import {
  ChangeEvent,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import { TextInputProps } from '../../types';
import BaseTextInput from './BaseTextInput.styles';
import { textInputStyle } from '../../styles';

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ iCss, iTheme, ...rest }, ref?: ForwardedRef<HTMLInputElement>) => {
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

    const { cssProps, componentProps } = extractCssProps(inputProps);

    const iStyle = useStyle(rest, textInputStyle, iCss, iTheme);
    const className = classnames('IMUI-TextInput-root', rest.className);
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
      <Container iCss={iStyle?.iCss} iTheme={iStyle?.iTheme} className={className}>
        <Container data-disabled={inputProps.disabled} className='IMUI-TextInput-container'>
          {icon && <Icon data-disabled={inputProps.disabled} icon={icon} className='IMUI-TextInput-icon' />}
          <BaseTextInput
            ref={innerRef}
            {...componentProps}
            className='IMUI-TextInput-input'
            $cssProps={cssProps}
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
              icon={clearIcon ?? faXmark}
              className='IMUI-TextInput-clear-button'
            />
          )}
        </Container>
        {error && <FieldMessage type={ERROR}>{errorMessage}</FieldMessage>}
      </Container>
    );
  },
);

export { TextInput };
