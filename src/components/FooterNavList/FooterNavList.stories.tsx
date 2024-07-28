import type { Meta, StoryObj } from '@storybook/react';
import FooterNavList from './FooterNavList';
import { FOOTER_LIST_HOME } from '../../constants';

export default {
  component: FooterNavList,
  title: 'Components/FooterNavList',
} as Meta;

type Story = StoryObj<typeof FooterNavList>;

export const Default: Story = {
  args: {
    title: 'Home',
    items: FOOTER_LIST_HOME,
  },
};
