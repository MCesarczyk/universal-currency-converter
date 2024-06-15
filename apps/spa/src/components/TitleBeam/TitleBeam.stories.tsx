import type { Meta, StoryObj } from '@storybook/react';
import { TitleBeam } from './TitleBeam';
import { languages } from '../../features/languages/data';

const meta: Meta<typeof TitleBeam> = {
  component: TitleBeam,
  title: 'Components/TitleBeam',
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  argTypes: {
    languages: {
      control: false,
    },
    setLanguage: {
      action: 'setLanguage',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TitleBeam>;
export const _TitleBeam: Story = {
  args: {
    languages: languages,
  },
};
