import React from 'react';

import Typography from 'components/Typography/Typography';

import { TooltipContainer, TooltipContent } from './Styled';

interface TooltipProps {
  active?: boolean;
  children: React.ReactNode;
  content: string;
}

const Tooltip = ({ active, children, content }: TooltipProps): JSX.Element => (
  <TooltipContainer>
    {children}
    <TooltipContent active={active}>
      <Typography component="span" variant="subtitleBold">
        {content}
      </Typography>
    </TooltipContent>
  </TooltipContainer>
);

export default Tooltip;
