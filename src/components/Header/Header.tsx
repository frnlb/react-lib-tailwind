import React from "react";
import { cva, VariantProps } from "class-variance-authority";

export interface HeaderProps {
  links: any[];
  logo: any;
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

export const Header = ({ links, logo, theme }: StyledHeader) => {
  return (
    <div className="bg-pink p-20 font-courier border-dotted border-b-2">
      <img src={logo} alt="logo" />
      {/* <div className="">{logo}</div> */}
      <div className="">{links}</div>
    </div>
  );
};

export default Header;
