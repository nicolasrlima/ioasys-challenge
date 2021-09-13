import React from 'react';

import { StyledPaper } from './Styled';

interface PaperProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Paper = ({ children, className, onClick }: PaperProps): JSX.Element => (
  <StyledPaper className={className} onClick={onClick}>
    {children}
  </StyledPaper>
);

export default Paper;
