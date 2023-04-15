import { cva, VariantProps } from "class-variance-authority";
import React from "react";

export interface ButtonProps {
  label?: string;
  color?: string;
  onClick?: () => {};
}

const button = cva("flex font-courier", {
  variants: {
    indent: {
      primary: ["bg-bbrown text-bwhite"],
      circle: ["bg-bbrown text-bwhite rounded-full"],
    },
  },
});

interface StyledButton extends ButtonProps, VariantProps<typeof button> {}
export const Button = ({ label, indent, onClick }: StyledButton) => {
  return (
    <button onClick={onClick} className={button({ indent })}>
      {label}
    </button>
  );
};

export default Button;
