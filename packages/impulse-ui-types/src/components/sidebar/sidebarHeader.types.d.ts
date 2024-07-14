import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import React, { ButtonHTMLAttributes } from 'react';
import { ButtonHTMLProps } from '../buttons';
import { IconHTMLProps } from '../icon';
import { TypographyHTMLProps } from '../text';
import { IOStyle } from '../theme';
interface SidebarHeaderProps extends SidebarHeaderRestProps {
    iStyle?: Partial<SidebarHeaderStyle>;
}
interface SidebarHeaderRestProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    headerText: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    icon?: IconDefinition;
}
interface SidebarHeaderStyle {
    buttonStyle: IOStyle<ButtonHTMLProps>;
    iconStyle: IOStyle<IconHTMLProps>;
    typographyStyle: IOStyle<TypographyHTMLProps>;
}
export type { SidebarHeaderProps, SidebarHeaderStyle };
