import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Select, SelectProps } from './Select';

const options = [
  {
    label: 'Option 1',
    value: 'option-1'
  },
  {
    label: 'Option 2',
    value: 'option-2'
  },
  {
    label: 'Option 3',
    value: 'option-3'
  }
];

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' }
  },
  parameters: {
    docs: {
      description: {
        component: 'Buttons allow the user to interact with the app'
      }
    }
  }
} as Meta;

export const Primary: Story<SelectProps> = (args) => <Select {...args} />;
Primary.args = {
  options,
  selectedValue: options[0].value
};
