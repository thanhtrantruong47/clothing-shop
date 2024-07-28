import type { Meta, StoryObj } from '@storybook/react';
import TabItem from './TabItem';

export default {
  component: TabItem,
  title: 'Components/TabItem',
} as Meta;

type Story = StoryObj<typeof TabItem>;

export const Default: Story = {
  args: {},
};
