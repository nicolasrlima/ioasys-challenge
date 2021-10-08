import React from 'react';
import { Meta, Story } from '@storybook/react';

import TextField, { TextFieldProps } from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' }
  },
  parameters: {
    docs: {
      description: {
        component:
          'TextField allows the user to input text, numbers, password or more'
      }
    }
  }
} as Meta;

export const Primary: Story<TextFieldProps> = (args) => <TextField {...args} />;
Primary.args = {
  label: 'Primary'
};

export const WithButton: Story<TextFieldProps> = (args) => (
  <TextField {...args} />
);
WithButton.args = {
  label: 'With Button',
  button: {
    buttonText: 'Button'
  }
};
