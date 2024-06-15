import type { Meta, StoryObj } from '@storybook/react';
import { FormButtons } from './FormButtons';

const meta: Meta<typeof FormButtons> = {
  component: FormButtons,
  title: 'Molecules/FormButtons',
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  argTypes: {
    mainButtonLabel: {
      control: {
        type: 'text',
      },
    },
    resetButtonLabel: {
      control: {
        type: 'text',
      },
    },
    onButtonClick: {
      action: 'clicked',
    },
  },
};
export default meta;

type Story = StoryObj<typeof FormButtons>;
export const _FormButtons: Story = {
  args: {
    mainButtonLabel: 'Submit',
    resetButtonLabel: 'Reset',
  },
};
