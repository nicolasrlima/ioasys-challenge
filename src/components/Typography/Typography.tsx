import React, { ElementType } from 'react';

import { StyledTypography } from './Styled';
import { Color, Variant } from './interfaces';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  color?: Color;
  component: ElementType;
  variant?: Variant;
}

const Typography = ({
  children,
  className,
  color = 'dark',
  component,
  variant = 'body'
}: TypographyProps): JSX.Element => (
  <StyledTypography
    as={component}
    className={className}
    color={color}
    variant={variant}
  >
    {children}
  </StyledTypography>
);

export default Typography;
