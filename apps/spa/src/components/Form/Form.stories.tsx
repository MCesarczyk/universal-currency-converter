import { ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Form } from './Form';
import { languages } from '../../features/languages/data';
import { LanguageKeys } from '../../features/languages/types';
import { useCurrentRatesMock } from '../../features/rates/useCurrentRatesMock';

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
    ratesData: {
      control: false,
    },
    getCurrentRates: {
      control: false,
    },
  },
};
export default meta;

const Template: StoryFn<ComponentProps<typeof Form>> = (args) => {
  const { getCurrentRates, ratesData } = useCurrentRatesMock();

  return <Form {...{ ...args, ratesData, getCurrentRates }} />;
};

export const _Form = Template.bind({});
_Form.args = {
  languages: languages,
  language: LanguageKeys.EN,
};
