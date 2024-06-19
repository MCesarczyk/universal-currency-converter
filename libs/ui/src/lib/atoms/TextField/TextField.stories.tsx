import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'Atoms/TextField',
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

type Story = StoryObj<typeof TextField>;
export const _TextField: Story = {
  args: {
    children: 'TextField',
  },
};
