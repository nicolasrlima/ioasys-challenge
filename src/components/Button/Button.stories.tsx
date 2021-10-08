import React from 'react';
import { Meta, Story } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
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

export const Primary: Story<ButtonProps> = (args) => <Button {...args} />;
Primary.args = {
  children: 'Primary',
  disabled: false
};

export const Disabled: Story<ButtonProps> = (args) => <Button {...args} />;
Disabled.args = {
  children: 'Disabled',
  disabled: true
};
