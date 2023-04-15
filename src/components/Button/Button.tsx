import { cva, VariantProps } from "class-variance-authority";
import React from "react";

export interface ButtonProps {
  label?: string;
  onClick?: () => {};
  className?: string;
}

const button = cva("flex font-courier", {
  variants: {
    indent: {
      primary: [
        "bg-bbrown text-bwhite hover:bg-brown hover:text-bblue p-3 active:text-black",
      ],
      circle: ["bg-bbrown text-bwhite rounded-full p-3"],
    },
    shape: {
      circle: ["rounded-full"],
      pill: ["rounded-4xl"],
      cornerSoft: ["rounded-3xl"],
      squared: ["rounded-none"],
    },
    color: {
      transparent: ["bg-transparent"],
      brown: ["bg-bbrown"],
      blue: ["bg-bblue"],
    },
    labelColor: {},
  },
});

interface StyledButton extends ButtonProps, VariantProps<typeof button> {}
export const Button = ({
  label,
  indent,
  onClick,
  color,
  className,
}: StyledButton) => {
  return (
    <button onClick={onClick} className={button({ indent, color, className })}>
      {label}
    </button>
  );
};

export default Button;
