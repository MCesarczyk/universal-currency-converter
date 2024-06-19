import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Atoms/Select',
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

type Story = StoryObj<typeof Select>;
export const _Select: Story = {
  args: {
    children: ['Option 1', 'Option 2', 'Option 3'].map((text) => (
      <option key={text} value={text}>
        {text}
      </option>
    )),
  },
};
