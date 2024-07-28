import type { Meta, StoryObj } from '@storybook/react';
import NavBarItem from './NavBarItem';

export default {
  component: NavBarItem,
  title: 'Components/NavBarItem',
} as Meta;

type Story = StoryObj<typeof NavBarItem>;

export const Default: Story = {
  args: {
    label: 'Home',
    destination: '/',
    isActive: false,
  },
};
