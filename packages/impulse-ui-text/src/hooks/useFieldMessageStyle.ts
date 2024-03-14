'use client';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons/faCircleExclamation';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation';
import { useComponentStyle } from '@impulse-ui/core';
import { GetFieldMessageIcon, UseFieldMessageStyleFn } from '@impulse-ui/types';

import { fieldMessageComponentMap } from '../maps';
import { defaultFieldMessageStyle } from '../styles';

const useFieldMessageStyle: UseFieldMessageStyleFn = (rest, iStyle) => {
  const { type } = rest;

  const getFieldMessageIcon: GetFieldMessageIcon = (type, icon) => {
    if (icon) {
      return icon;
    }

    switch (type) {
      case 'info':
        return faCircleInfo;
      case 'success':
        return faCircleCheck;
      case 'warning':
        return faTriangleExclamation;
      case 'error':
        return faCircleExclamation;
      default:
        return faCircleInfo;
    }
  };

  const { mainContainerStyle, iconStyle, typographyStyle } = useComponentStyle(
    fieldMessageComponentMap,
    rest,
    defaultFieldMessageStyle,
    iStyle,
  );

  return {
    mainContainerStyle: mainContainerStyle?.[type!],
    iconStyle: iconStyle?.[type!],
    typographyStyle: typographyStyle?.[type!],
    getFieldMessageIcon,
  };
};

export { useFieldMessageStyle };
