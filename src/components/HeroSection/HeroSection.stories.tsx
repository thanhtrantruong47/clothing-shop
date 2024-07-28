import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from './HeroSection';

export default {
  component: HeroSection,
  title: 'Components/HeroSection',
} as Meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {},
};
