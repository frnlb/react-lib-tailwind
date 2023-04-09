import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Molecules/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
  },
};

