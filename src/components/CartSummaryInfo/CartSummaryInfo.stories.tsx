import type { Meta, StoryObj } from '@storybook/react';
import CartSummaryInfo from './CartSummaryInfo';

export default {
  component: CartSummaryInfo,
  title: 'Components/CartSummaryInfo',
} as Meta;

type Story = StoryObj<typeof CartSummaryInfo>;

export const Default: Story = {
  args: {
    numberProduct: 5,
    onClickCheckoutButton: () => {},
    totalPrice: 500,
  },
};
