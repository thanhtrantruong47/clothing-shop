import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

export default {
  component: Typography,
  title: 'Components/Typography',
} as Meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {},
};
