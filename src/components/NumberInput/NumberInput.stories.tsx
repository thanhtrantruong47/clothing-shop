import type { Meta, StoryObj } from '@storybook/react';
import NumberInput from './NumberInput';

export default {
  component: NumberInput,
  title: 'Components/NumberInput',
} as Meta;

type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  args: { value: 1 },
};
