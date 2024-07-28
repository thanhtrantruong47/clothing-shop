import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { SearchIcon } from '../Icon/SearchIcon';
import { fn } from '@storybook/test';

export default {
  component: Input,
  title: 'Components/Input',
} as Meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Search',
    type: 'input',
    onChange: fn(),
    endIcon: <SearchIcon />,
    maxLength: 20,
  },
};
