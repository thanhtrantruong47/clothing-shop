import type { Preview } from '@storybook/react';
import '../src/styles/index.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default preview;
