import type { Meta, StoryObj } from '@storybook/react';
import Rating from './Rating';

export default {
  component: Rating,
  title: 'Components/Rating',
} as Meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {},
};
