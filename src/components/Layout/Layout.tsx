import React from "react";
import { Colors, Container, LayoutWidth } from "@types";
import { cva, VariantProps } from "class-variance-authority";

export interface LayoutProps extends Container {}

const layout = cva(
  "grid grid-cols-12 md:grid-cols-8 sm:grid-cols-1 h-full gap-2 auto-rows-auto lg:grid-cols-12",
  {
    variants: {
      backgroundColor: {
        red: ["bg-red"],
        purple: ["bg-purple"],
        grayish: ["bg-grayish"],
        white: ["bg-bwhite"],
        cream: ["bg-bcream"],
        green: ["bg-bgreen"],
        orange: ["bg-orange"],
        darkOrange: ["bg-darkOrange"],
      },
    },
  }
);

export interface StyledLayout
  extends LayoutProps,
    VariantProps<typeof layout> {}

const Layout = ({ children, backgroundColor, className }: StyledLayout) => {
  return (
    <div className={layout({ backgroundColor, className })}>{children}</div>
  );
};

export default Layout;
