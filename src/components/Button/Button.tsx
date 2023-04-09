import { cva, VariantProps } from "class-variance-authority";
import React from 'react';

export interface ButtonProps {
    label?: string;
    color?: string;
    onClick?: ()=>{};
}

const button = cva("flex font-courier", {
  variants: {
    indent: {
      primary: ["bg-blue"]
    }
  }
})

interface StyledButton extends ButtonProps, VariantProps<typeof button>{}
export const Button = ({label, indent, onClick}: StyledButton) => {
  return (
    <button className={button({indent})}>{label}</button>
  )
}

export default Button;