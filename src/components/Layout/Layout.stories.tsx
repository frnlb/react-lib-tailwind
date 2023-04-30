import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Layout from "./Layout";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Layout/Layout",
  component: Layout,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

const blocks = (
  <>
    <div className="w-full border-4 border-solid border-orange col-span-full bg-bgreyish">
      header
    </div>
    <div className="col-start-2 col-end-1 row-start-2 sm:hidden md:flex lg:flex">
      left data a very long paragraph with large data inside, let's check out
      this will work
    </div>
    <div className="flex flex-col justify-center md:col-start-2 md:col-end-8 lg:col-start-3 lg:col-end-11 bg-bcream">
      <div>main one</div>
      <div>main two</div>
      <div>main three</div>
    </div>
    <div>side one</div>
    <div>side two</div>
    <div className="w-full col-span-full bg-brown">footer</div>
  </>
);

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: blocks,
  },
};
