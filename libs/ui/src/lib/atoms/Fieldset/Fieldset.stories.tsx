import type { Meta, StoryObj } from '@storybook/react';
import { Fieldset } from './Fieldset';

const meta: Meta<typeof Fieldset> = {
  component: Fieldset,
  title: 'Atoms/Fieldset',
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Fieldset>;
export const _Fieldset: Story = {
  args: {
    title: 'Fieldset',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};
