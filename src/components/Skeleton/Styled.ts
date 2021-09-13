import styled from 'styled-components';

export const StyledSkeleton = styled.div<{ height: string; width: string }>`
  background-color: #eee;
  border-radius: 0.25rem;
  height: ${({ height }) => height};
  width: ${({ width }) => width}; ;
`;
