import type { Meta, StoryObj } from '@storybook/react';
import Details from '.';

export default {
  component: Details,
  title: 'Components/Details',
} as Meta;

type Story = StoryObj<typeof Details>;

export const Default: Story = {
  args: {},
};
