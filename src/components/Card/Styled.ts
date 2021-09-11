import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: var(--white);
  border-radius: 0.25rem;
  box-shadow: 0px 6px 24px 0px #54105f13;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.005);
  }
`;

export const BookCover = styled.img`
  border-radius: 0.25rem;
  height: 7.75rem;
  width: 5rem;
`;

export const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BookTitleAndAuthorContainer = styled.div``;

export const BookDetailsContainer = styled.div``;
