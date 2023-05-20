import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "./Slider";

const IMAGES = [
  require("../../assets/mountains-under-mist-morning-amazing-260nw-1725825019.webp"),
  require("../../assets/pexels-photo-674010.jpeg"),
  require("../../assets/pexels-pixabay-268533.jpg"),
  require("../../assets/tree-736885__480.jpg"),
];

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Molecules/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    pictures: IMAGES,
    time: 1000,
  },
};
