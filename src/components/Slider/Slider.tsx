import React from "react";

export interface SliderProps {
  slide: "drag" | "appear" | "fade";
  time: number;
  pictures: File[];
}

export const Slider = ({}) => {
  return <div className="flex w-full p-4 bg-tr"></div>;
};

export default Slider;
