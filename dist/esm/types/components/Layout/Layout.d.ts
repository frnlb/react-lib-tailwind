/// <reference types="react" />
import { Container } from "types";
import { VariantProps } from "class-variance-authority";
export interface LayoutProps extends Container {
}
declare const layout: (props?: ({
    backgroundColor?: "green" | "orange" | "purple" | "red" | "white" | "grayish" | "cream" | "darkOrange" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface StyledLayout extends LayoutProps, VariantProps<typeof layout> {
}
declare const Layout: ({ children, backgroundColor }: StyledLayout) => JSX.Element;
export default Layout;
