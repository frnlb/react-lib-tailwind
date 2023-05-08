/// <reference types="react" />
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import { Container } from 'types';

interface ButtonProps {
    label?: string;
    onClick?: () => {} | any;
    className?: string;
    icon?: HTMLImageElement | String | File;
}
declare const button: (props?: ({
    indent?: "primary" | "circle" | null | undefined;
    shape?: "circle" | "pill" | "cornerSoft" | "squared" | null | undefined;
    color?: "transparent" | "brown" | "blue" | null | undefined;
    iconPosition?: "up" | "bottom" | "left" | "right" | null | undefined;
    labelColor?: null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface StyledButton extends ButtonProps, VariantProps<typeof button> {
}
declare const Button: ({ label, icon, indent, onClick, color, className, shape, }: StyledButton) => JSX.Element;

interface HeaderProps {
    links: any[];
    logo: any;
}
declare const header: (props?: ({
    theme?: "dark" | "default" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface StyledHeader extends HeaderProps, VariantProps<typeof header> {
}
declare const Header: ({ links, logo, theme }: StyledHeader) => JSX.Element;

interface SliderChipProps {
    className: string;
    current: boolean;
    label?: string | number;
}
declare const sliderChip: (props?: ({
    intent?: "primaryInactive" | "primaryActive" | null | undefined;
    color?: "brown" | "blue" | "green" | null | undefined;
    active?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface StyledSliderChip extends SliderChipProps, VariantProps<typeof sliderChip> {
}
declare const SliderChip: ({ label, className, color, intent, active, }: StyledSliderChip) => JSX.Element;

interface SliderProps {
    effect?: "drag" | "appear" | "fade";
    time: number;
    pictures: File[] | any[];
}
declare const Slider: ({ effect, time, pictures, }: SliderProps) => JSX.Element;

interface LayoutProps extends Container {
}
declare const layout: (props?: ({
    backgroundColor?: "green" | "orange" | "purple" | "red" | "white" | "grayish" | "cream" | "darkOrange" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface StyledLayout extends LayoutProps, VariantProps<typeof layout> {
}
declare const Layout: ({ children, backgroundColor }: StyledLayout) => JSX.Element;

declare const SideBar: () => JSX.Element;

export { Button, Header, Layout, SideBar, Slider, SliderChip };
