/// <reference types="react" />
import { VariantProps } from "class-variance-authority";
export interface ButtonProps {
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
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface StyledButton extends ButtonProps, VariantProps<typeof button> {
}
export declare const Button: ({ label, icon, indent, onClick, color, className, shape, }: StyledButton) => JSX.Element;
export default Button;
