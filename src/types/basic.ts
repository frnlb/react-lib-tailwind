export type Colors =
  | "bwhite"
  | "bcream"
  | "bbrown"
  | "bgray"
  | "bgreen"
  | "black"
  | "bblack"
  | "bgreyish"
  | "bblue"
  | "gray"
  | "brown"
  | "transparent";

export type LayoutWidth = "large" | "narrow" | "medium";
export interface Container {
  children: React.ReactNode | React.ReactNode[];
  className: string;
}
