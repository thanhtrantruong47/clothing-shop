import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {},
};
