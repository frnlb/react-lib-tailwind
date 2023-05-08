/// <reference types="react" />
import { VariantProps } from "class-variance-authority";
export interface SliderCounterProps {
    index: number;
    type: any;
    total: number;
}
declare const sliderCounter: (props?: ({
    intent?: "primary" | null | undefined;
    color?: "brown" | "blue" | "green" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface StyledSliderCounter extends SliderCounterProps, VariantProps<typeof sliderCounter> {
}
declare const SliderCounter: ({ index, type, total }: StyledSliderCounter) => JSX.Element;
export default SliderCounter;
