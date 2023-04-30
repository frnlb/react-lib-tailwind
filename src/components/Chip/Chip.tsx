import React from "react";
import { Colors } from "types";

export interface ChipProps {
  backgroundColor: Colors;
  textColor: Colors;
  hoverColor: Colors;
  onClick?: () => {};
}

const Chip = ({
  backgroundColor,
  textColor,
  hoverColor,
  onClick,
}: ChipProps) => {
  return <div>Chip</div>;
};

export default Chip;
