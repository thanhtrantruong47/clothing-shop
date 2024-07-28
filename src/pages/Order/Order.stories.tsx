import type { Meta, StoryObj } from '@storybook/react';
import Order from '.';

export default {
  component: Order,
  title: 'Components/Order',
} as Meta;

type Story = StoryObj<typeof Order>;

export const Default: Story = {
  args: {},
};
