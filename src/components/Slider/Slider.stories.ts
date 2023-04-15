import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "./Slider";

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
    label: "Button",
    indent: "primary",
  },
};
