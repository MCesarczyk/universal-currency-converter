import type { Meta, StoryObj } from '@storybook/react';
import { App } from './App';

const meta: Meta<typeof App> = {
  component: App,
  title: 'Layouts/App',
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof App>;
export const _App: Story = {
  args: {},
};
