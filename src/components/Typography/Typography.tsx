import React, { ElementType } from 'react';

import { StyledTypography } from './Styled';
import { Color, Variant } from './interfaces';

interface TypographyProps {
  children: React.ReactNode;
  color?: Color;
  component: ElementType;
  variant?: Variant;
}

const Typography = ({
  children,
  color = 'dark',
  component,
  variant = 'body'
}: TypographyProps): JSX.Element => (
  <StyledTypography as={component} color={color} variant={variant}>
    {children}
  </StyledTypography>
);

export default Typography;
