import React, { useEffect, useState } from "react";
import { timer } from "../../utils/utils";
import { Button } from "@components";

export interface SliderProps {
  effect?: "drag" | "appear" | "fade";
  time: number;
  pictures: File[] | any[];
}

export const Slider = ({
  effect = "appear",
  time = 3000,
  pictures,
}: SliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [changeSlides, setChangeSlides] = useState(true);

  useEffect(() => {
    console.log("image index inside useEffect", imageIndex);
    const timerId = timer(time, () => setImageIndex(imageIndex + 1));
    return () => {
      clearTimeout(timerId);
    };
  }, [imageIndex, changeSlides]);

  return (
    <div className="flex w-full p-4 bg-tr">
      <div className="flex justify-center w-full align-middle">
        <Button label="&larr;" onClick={() => setImageIndex(imageIndex - 1)} />
        <img src={pictures[imageIndex]} alt="test" />
      </div>
    </div>
  );
};

export default Slider;
