import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Container } from "types";

const section = cva("grid", {
  variants: {
    width: {
      large: ["col-span-full"],
      main: ["col-start-1"],
      narrow: [],
    },
    color: {
      white: ["bg-bwhite"],
    },
  },
});

interface SectionProps extends Container {}

interface StyledSection extends SectionProps, VariantProps<typeof section> {}

const Section = ({ children, width, color }: StyledSection) => {
  return <div className={section({ width, color })}>{children}</div>;
};

export default Section;
