import type { Meta, StoryObj } from '@storybook/react';
import ProductCart from './ProductCart';
import productImage from '../../assets/images/delete.svg';

export default {
  component: ProductCart,
  title: 'Components/ProductCart',
} as Meta;

type Story = StoryObj<typeof ProductCart>;

export const Default: Story = {
  args: {
    id: 5,
    title: 'Smart T-Shirt',
    description: ' Best quality',
    image: productImage,
    price: 40,
    rate: 999999,
    numberRating: 5,
  },
};
