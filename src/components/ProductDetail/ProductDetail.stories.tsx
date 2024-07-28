import type { Meta, StoryObj } from '@storybook/react';
import ProductDetail from './ProductDetail';
import { PRODUCT_DETAIL_DATA } from '../../constants';

export default {
  component: ProductDetail,
  title: 'Components/ProductDetail',
} as Meta;

type Story = StoryObj<typeof ProductDetail>;

export const Default: Story = {
  args: { ...PRODUCT_DETAIL_DATA },
};
