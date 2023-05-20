import React from "react";
import { cva, VariantProps } from "class-variance-authority";

export interface SliderChipProps {
  className?: string;
  current?: boolean;
  label?: string | number;
}

const sliderChip = cva("flex", {
  variants: {
    intent: {
      primaryInactive: ["bg-bblue"],
      primaryActive: ["bg-bgreyish"],
    },
    color: {
      blue: ["bg-bblue"],
      green: ["bg-bgreen"],
      brown: ["bg-bgreyish"],
    },
    active: {
      true: ["p-[10px]"],
      false: ["p-2"],
    },
  },
});

export interface StyledSliderChip
  extends SliderChipProps,
    VariantProps<typeof sliderChip> {}

export const SliderChip = ({
  label,
  className,
  color,
  intent,
  active,
}: StyledSliderChip) => {
  return (
    <div className={sliderChip({ intent, color, className, active })}>
      {label}
    </div>
  );
};

export default SliderChip;
