import type { Meta, StoryObj } from "@storybook/react";
import logo from "../../assets/Font_F.svg";
import { Link } from "@components";

const LINKS = [
  {
    label: "home",
    to: "/",
  },
  {
    label: "blog",
    to: "/blog",
  },
  {
    label: "gallery",
    to: "/gallery",
  },
  {
    label: "others",
    to: "/others",
  },
  {
    label: "about",
    to: "/about-me",
  },
];

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Atoms/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    to: LINKS[0].to,
    children: LINKS[0].label,
  },
};
