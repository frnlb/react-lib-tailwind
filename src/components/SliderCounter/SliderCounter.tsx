import React from "react";
import { cva, VariantProps } from "class-variance-authority";

export interface SliderCounterProps {
  index: number;
  type: any;
  total: number;
}

const sliderCounter = cva("flex", {
  variants: {
    intent: {
        primary: ["bg-bblue"]
    }
    color: {
      blue: ["bg-bblue"],
      green: ["bg-bgreen"],
      brown: ["bg-bgreyish"],
    },
  },
});

interface StyledSliderCounter
  extends SliderCounterProps,
    VariantProps<typeof sliderCounter> {}

const SliderCounter = ({ index, type, total }: StyledSliderCounter) => {

  return <div><div>
        {total.forEach((item) => {
            return (
                <SliderChip/>
            )
        })}
    </div></div>;
};

export default SliderCounter;
