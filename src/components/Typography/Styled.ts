import styled from 'styled-components';

import { Color, Variant } from './interfaces';

export const StyledTypography = styled.div<{
  color: Color;
  variant: Variant;
}>`
  color: ${({ color }) => color};

  font-size: ${({ variant }) =>
    ((variant === 'titleBold' || variant === 'titleThin') && '1.75rem') ||
    ((variant === 'subtitleBold' || variant === 'subtitleThin') &&
      '0.875rem') ||
    (variant === 'body' && '0.75rem')};

  font-weight: ${({ variant }) =>
    ((variant === 'titleBold' || variant === 'subtitleBold') && '700') ||
    ((variant === 'titleThin' || variant === 'subtitleThin') && '300') ||
    (variant === 'body' && '400')};
`;
