import type { Meta, StoryObj } from '@storybook/react';
import { Clock } from './Clock';

const meta: Meta<typeof Clock> = {
  component: Clock,
  title: 'Molecules/Clock',
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    language: {
      control: 'radio',
      options: ['EN', 'PL', 'DE', 'FR', 'ES', 'RU'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Clock>;
export const _Clock: Story = {
  args: {
    label: 'Time: ',
    language: 'EN',
  },
};
