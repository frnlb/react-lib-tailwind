/// <reference types="react" />
import { VariantProps } from "class-variance-authority";
export interface HeaderProps {
    links: any[];
    logo: any;
}
declare const header: (props?: ({
    theme?: "dark" | "default" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface StyledHeader extends HeaderProps, VariantProps<typeof header> {
}
export declare const Header: ({ links, logo, theme }: StyledHeader) => JSX.Element;
export default Header;
