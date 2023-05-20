import { Theme } from "@types";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import classnames from "classnames";

interface LogoProps {}

const textLogo = cva("", {
  variants: {
    theme: {
      default: ["fill-bblack"],
      dark: ["fill-bwhite"],
    },
  },
});

export interface StyledLogo extends LogoProps, VariantProps<typeof textLogo> {}

const Logo = ({ theme }: StyledLogo) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="39.23"
    height="46.889999"
    id="svg3017"
    version="1.1"
  >
    <g id="layer1" transform="translate(-276.0549,-179.76133)">
      <text
        xmlSpace="preserve"
        style={{
          fontSize: "72px",
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          lineHeight: "125%",
          letterSpacing: "0px",
          wordSpacing: "0px",
          stroke: "none",
          fontFamily: "Linux Libertine O",
        }}
        x="26.263966"
        y="33.44817"
        id="text3037"
        transform="translate(260.07679,165.41838)"
        className={theme === "default" ? "#202020" : "#f1e3da"}
      ></text>
      <text
        xmlSpace="preserve"
        style={{
          fontSize: "72px",
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          lineHeight: "125%",
          letterSpacing: "0px",
          wordSpacing: "0px",
          stroke: "none",
          fontFamily: "Linux Libertine O",
          fill: theme === "default" ? "#202020" : "#f1e3da",
        }}
        x="4.5456867"
        y="52.932308"
        id="text3061"
        transform="translate(271.11322,173.57502)"
      >
        F
      </text>
    </g>
  </svg>
);

export default Logo;
