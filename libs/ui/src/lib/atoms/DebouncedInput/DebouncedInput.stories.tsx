import type { Meta, StoryObj } from '@storybook/react';
import { DebouncedInput } from './DebouncedInput';

const meta: Meta<typeof DebouncedInput> = {
  component: DebouncedInput,
  title: 'Atoms/DebouncedInput',
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  argTypes: {
    onChange: {
      action: 'onChange',
    },
    delay: {
      control: {
        type: 'number',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof DebouncedInput>;
export const _DebouncedInput: Story = {
  args: {
    delay: 500,
    placeholder: 'Search...',
  },
};
