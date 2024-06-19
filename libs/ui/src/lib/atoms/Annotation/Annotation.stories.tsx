import type { Meta, StoryObj } from '@storybook/react';
import { Annotation } from './Annotation';

const meta: Meta<typeof Annotation> = {
  component: Annotation,
  title: 'Atoms/Annotation',
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Annotation>;
export const _Annotation: Story = {
  args: {
    text: 'Annotation',
  },
};
