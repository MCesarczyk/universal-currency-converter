import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Atoms/Button',
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
    reset: {
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
  },
};
export default meta;

type Story = StoryObj<typeof Button>;
export const _Button: Story = {
  args: {
    children: 'Button',
    reset: false,
  },
};
