import type { Meta, StoryObj } from "@storybook/react";
// import { ReactComponent as Logo } from "../../assets/fontF.svg";
import { Logo } from "@components";

import { Header } from "@components";
import React from "react";

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
  title: "Molecules/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    theme: "default",
    links: LINKS,
    logo: <Logo theme={"default"} />,
  },
};

console.log(Default.args);

export const Primary: Story = {
  args: {
    ...Default.args,
  },
};

export const Dark: Story = {
  args: {
    ...Default.args,
    theme: "dark",
    logo: <Logo theme={"dark"} />,
  },
};
