import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './Styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({
  children,
  disabled,
  onClick,
  type = 'button'
}: ButtonProps): JSX.Element => (
  // eslint-disable-next-line react/button-has-type
  <StyledButton type={type} onClick={onClick} disabled={disabled}>
    {children}
  </StyledButton>
);

export default Button;
