import type { Meta, StoryObj } from '@storybook/react';
import ProductImages from './ProductImages';
import image1 from '../../assets/images/detail-small.jpg';
import image2 from '../../assets/images/small-t-shirt.jpg';

const images = [image1, image2, image2, image2];

export default {
  component: ProductImages,
  title: 'Components/ProductImages',
} as Meta;

type Story = StoryObj<typeof ProductImages>;

export const Default: Story = {
  args: { images: images, title: 'T-shirt' },
};
