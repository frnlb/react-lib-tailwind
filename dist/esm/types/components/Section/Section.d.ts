/// <reference types="react" />
import { VariantProps } from "class-variance-authority";
import { Container } from "types";
declare const section: (props?: ({
    width?: "main" | "large" | "narrow" | null | undefined;
    color?: "white" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface SectionProps extends Container {
}
interface StyledSection extends SectionProps, VariantProps<typeof section> {
}
declare const Section: ({ children, width, color }: StyledSection) => JSX.Element;
export default Section;
