import React from 'react';
import { cva}

export interface ButtonProps {
    label?: string;
    color?: string;
    onClick?: ()=>{};
}

export const Button = ({label, color, variant, onClick}: ButtonProps) => {
  return (
    <div>{label}</div>
  )
}

export default Button;