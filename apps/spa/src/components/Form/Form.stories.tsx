import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';
import { languages } from '../../features/languages/data';
import { LanguageKeys } from '../../features/languages/types';

const meta: Meta<typeof Form> = {
  component: Form,
  title: 'Components/Form',
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
    language: {
      control: {
        type: 'text',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Form>;
export const _Form: Story = {
  args: {
    languages: languages,
    language: LanguageKeys.EN,
  },
};
