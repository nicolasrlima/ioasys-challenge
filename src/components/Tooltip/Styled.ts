import styled from 'styled-components';

export const TooltipContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const TooltipContent = styled.div<{ active: boolean }>`
  background-color: #ffffff66;
  border-radius: 0.25rem;
  bottom: calc(5rem * -1);
  color: var(--white);
  opacity: ${({ active }) => (active ? 1 : 0)};
  padding: 1rem;
  position: absolute;
  width: fit-content;
  transition: all 500ms;

  &::before {
    content: '';
    border: solid transparent;
    position: absolute;
    pointer-events: none;
    border-width: 0.5rem;
    bottom: 100%;
    border-bottom-color: #ffffff66;
  }
`;
