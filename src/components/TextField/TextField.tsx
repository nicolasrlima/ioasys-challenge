import React, { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

import { UseFormRegisterReturn } from 'react-hook-form';

import Button from 'components/Button/Button';

import {
  TextFieldContainer,
  TextFieldInput,
  TextFieldLabel,
  TextFieldLabelAndInputContainer
} from './Styled';

type TextFieldButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonText: string;
  buttonType?: 'submit' | 'reset' | 'button';
  onButtonClick?: () => void;
};

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn;
  label: string;
  button?: TextFieldButtonProps;
}

const TextField = ({
  button,
  label,
  register,
  type = 'text',
  ...props
}: TextFieldProps): JSX.Element => (
  <TextFieldContainer>
    <TextFieldLabelAndInputContainer>
      <TextFieldLabel>{label}</TextFieldLabel>
      <TextFieldInput type={type} {...register} {...props} />
    </TextFieldLabelAndInputContainer>
    {button && (
      <Button onClick={button.onButtonClick} type={button.buttonType}>
        {button.buttonText}
      </Button>
    )}
  </TextFieldContainer>
);

export default TextField;
