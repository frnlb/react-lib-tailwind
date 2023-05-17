import React, { ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

export interface HeaderProps {
  links: any[];
  logo?: any;
  children?: ReactNode | ReactNode[];
}

const header = cva("flex, w-screen", {
  variants: {
    theme: {
      dark: ["bg-black", "text-bwhite"],
      default: ["bg-bcream", "text-b"],
    },
  },
});

interface StyledHeader extends HeaderProps, VariantProps<typeof header> {}

export const Header = ({ links, logo, theme, children }: StyledHeader) => {
  return (
    <div className="p-20 border-b-2 border-dotted bg-pink font-courier">
      <img src={logo} alt="logo" />
      <div className="">{links.map((link) => {
        return(<a>{link}</a>)
      })}</div>
    </div>
  );
};

export default Header;
