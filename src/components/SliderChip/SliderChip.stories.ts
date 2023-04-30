import type { Meta, StoryObj } from "@storybook/react";
import { SliderChip } from "./SliderChip";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Atoms/SliderChip",
  component: SliderChip,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SliderChip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    intent: "primaryActive",
    active: true,
  },
};

export const Active = {
  args: {
    indent: "primaryActive",
    active: true,
  },
};

export const Label = {
  args: {
    indent: "primaryActive",
    active: false,
    label: 1,
  },
};
