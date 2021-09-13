import styled, { keyframes } from 'styled-components';

export const LoaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  max-height: 100%;
  min-height: 100vh;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  background: transparent;
  border-bottom: 0.125rem solid var(--gray);
  border-left: 0.25rem solid var(--dark);
  border-radius: 50%;
  border-right: 0.125rem solid var(--gray);
  border-top: 0.125rem solid var(--gray);
  height: 12rem;
  position: absolute;
  transform: translateZ(0);
  width: 12rem;
`;
