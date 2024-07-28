import type { Meta, StoryObj } from '@storybook/react';
import TabList from './TabList';
import { TAB_LIST } from '../../constants';

export default {
  component: TabList,
  title: 'Components/TabList',
} as Meta;

type Story = StoryObj<typeof TabList>;

export const Default: Story = {
  args: { listNavItems: TAB_LIST },
};
