import React, { ReactComponentElement, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Link } from "@components";
import { Theme } from "@types";
export interface HeaderProps {
  links: any[];
  logo?: React.ReactElement;
  children?: ReactNode | ReactNode[];
  theme: Theme;
}

const addLogo = (
  theme: Theme = "default",
  logoComponent?: React.ReactElement
) => {
  if (logoComponent) {
    return React.cloneElement(logoComponent, { theme });
  }
};
const header = cva(
  "flex, w-screen, p-20, border-b-2, border-dotted, bg-pink, font-courier justify-around",
  {
    variants: {
      theme: {
        dark: ["bg-black", "text-bwhite"],
        default: ["bg-bcream", "text-b"],
      },
    },
  }
);

export interface StyledHeader
  extends Omit<HeaderProps, "theme">,
    VariantProps<typeof header> {
  theme: "default" | "dark";
}

export const Header = ({
  links,
  logo,
  theme = "default",
  children,
}: StyledHeader) => {
  return (
    <div className={header({ theme })}>
      {logo && addLogo(theme, logo)}
      <div className="inline-flex justify-evenly">
        {links?.map((link, index) => {
          return (
            <Link to={link.link} key={index} type={"header"}>
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
