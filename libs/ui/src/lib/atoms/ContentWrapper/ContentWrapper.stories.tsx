import type { Meta, StoryObj } from '@storybook/react';
import { ContentWrapper } from './ContentWrapper';

const meta: Meta<typeof ContentWrapper> = {
  component: ContentWrapper,
  title: 'Atoms/ContentWrapper',
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    vertical: {
      control: {
        type: 'boolean',
      },
    },
    as: {
      control: false,
    },
    forwardedAs: {
      control: false,
    },
    theme: {
      control: false,
    },
    type: {
      table: {
        disable: true,
      },
    },
    direction: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ContentWrapper>;
export const _ContentWrapper: Story = {
  args: {
    children: [<p>Some content</p>, <p>Other content</p>],
    vertical: false,
  },
};
