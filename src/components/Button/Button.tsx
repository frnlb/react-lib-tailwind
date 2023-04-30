import { cva, VariantProps } from "class-variance-authority";
import React from "react";

export interface ButtonProps {
  label?: string;
  onClick?: () => {} | any;
  className?: string;
  icon?: HTMLImageElement | String | File;
}

const button = cva("flex font-courier p-1 md:p-2", {
  variants: {
    indent: {
      primary: [
        "bg-bbrown text-bwhite hover:bg-brown hover:inset-1 inset-p-3 active:text-black",
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
    iconPosition: {
      up: [""],
      bottom: [""],
      left: [""],
      right: [""],
    },
    labelColor: {},
  },
});

interface StyledButton extends ButtonProps, VariantProps<typeof button> {}
export const Button = ({
  label,
  icon,
  indent,
  onClick,
  color,
  className,
  shape,
}: StyledButton) => {
  return (
    <button
      onClick={onClick}
      className={button({ indent, color, shape, className })}
    >
      {icon && <img src={icon} />}
      {label}
    </button>
  );
};

export default Button;
