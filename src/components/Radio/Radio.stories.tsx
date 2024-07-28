import type { Meta, StoryObj } from '@storybook/react';

import RadioGroup from './Radio';

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
};

const colorOptions = ['black', 'blue', 'green'];

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const InputRadioColor: Story = {
  args: {
    options: colorOptions,
  },
};
