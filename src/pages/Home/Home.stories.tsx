import type { Meta, StoryObj } from '@storybook/react';
import Home from '.';

export default {
  component: Home,
  title: 'Components/Home',
} as Meta;

type Story = StoryObj<typeof Home>;

export const Default: Story = {
  args: {},
};
