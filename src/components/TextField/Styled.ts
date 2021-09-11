import styled from 'styled-components';

export const TextFieldContainer = styled.div`
  align-items: center;
  background-color: #00000052;
  border-radius: 0.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-between;
  padding: 0.5rem;
  width: 100%;
`;

export const TextFieldLabelAndInputContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const TextFieldInput = styled.input`
  background-color: transparent;
  border: 0;
  color: var(--white);
  line-height: 1.5rem;

  &:focus {
    outline: 0;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 9999s ease-in-out 0s,
      color 9999s ease-in-out 0s;
  }
`;

export const TextFieldLabel = styled.label`
  color: var(--white);
  padding-bottom: 0.25rem;
  opacity: 0.5;
  transform: translate3d(0, 5px, 0);
`;
