import type { Meta, StoryObj } from '@storybook/react';
import SelectedProduct from './SelectedProduct';

export default {
  component: SelectedProduct,
  title: 'Components/SelectedProduct',
} as Meta;

type Story = StoryObj<typeof SelectedProduct>;

export const Default: Story = {
  args: {},
};
