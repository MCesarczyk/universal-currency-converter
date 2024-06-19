import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';

const meta: Meta<typeof Title> = {
  component: Title,
  title: 'Atoms/Title',
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
      control: false
    },
    forwardedAs: {
      control: false
    },
    theme: {
      control: false
    },
  },
};
export default meta;

type Story = StoryObj<typeof Title>;
export const _Title: Story = {
  args: {
    children: 'Title',
  },
};
