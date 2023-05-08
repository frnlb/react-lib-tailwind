/// <reference types="react" />
import { VariantProps } from "class-variance-authority";
export interface SliderChipProps {
    className: string;
    current: boolean;
    label?: string | number;
}
declare const sliderChip: (props?: ({
    intent?: "primaryInactive" | "primaryActive" | null | undefined;
    color?: "brown" | "blue" | "green" | null | undefined;
    active?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface StyledSliderChip extends SliderChipProps, VariantProps<typeof sliderChip> {
}
export declare const SliderChip: ({ label, className, color, intent, active, }: StyledSliderChip) => JSX.Element;
export default SliderChip;
