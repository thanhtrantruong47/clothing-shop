import type { Meta, StoryObj } from '@storybook/react';
import Cart from '.';

export default {
  component: Cart,
  title: 'Components/Cart',
} as Meta;

type Story = StoryObj<typeof Cart>;

export const Default: Story = {
  args: {},
};
