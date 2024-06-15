import type { Meta, StoryObj } from '@storybook/react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { languages } from '../../features/languages/data';

const meta: Meta<typeof LanguageSwitcher> = {
  component: LanguageSwitcher,
  title: 'Components/LanguageSwitcher',
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  argTypes: {
    languages: {
      control: {
        type: 'object',
      },
    },
    setLanguage: {
      action: 'setLanguage',
    },
  },
};
export default meta;

type Story = StoryObj<typeof LanguageSwitcher>;
export const _LanguageSwitcher: Story = {
  args: {
    languages: languages,
  },
};
