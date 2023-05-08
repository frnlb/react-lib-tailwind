/// <reference types="react" />
import { Colors } from "types";
export interface ChipProps {
    backgroundColor: Colors;
    textColor: Colors;
    hoverColor: Colors;
    onClick?: () => {};
}
declare const Chip: ({ backgroundColor, textColor, hoverColor, onClick, }: ChipProps) => JSX.Element;
export default Chip;
