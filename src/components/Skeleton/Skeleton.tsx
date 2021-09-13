import React from 'react';

import { StyledSkeleton } from './Styled';

interface SkeletonProps {
  height?: string;
  width?: string;
}

const Skeleton = ({
  height = '1rem',
  width = '100%'
}: SkeletonProps): JSX.Element => (
  <StyledSkeleton height={height} width={width} />
);

export default Skeleton;
