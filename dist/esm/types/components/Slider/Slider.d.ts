/// <reference types="react" />
export interface SliderProps {
    effect?: "drag" | "appear" | "fade";
    time: number;
    pictures: File[] | any[];
}
export declare const Slider: ({ effect, time, pictures, }: SliderProps) => JSX.Element;
export default Slider;
