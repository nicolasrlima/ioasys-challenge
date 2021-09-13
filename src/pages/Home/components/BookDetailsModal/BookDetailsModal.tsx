import React from 'react';

import { useHistory, useParams } from 'react-router-dom';

import { ReactComponent as QuotesIcon } from 'assets/quotes-icon.svg';
import Modal from 'components/Modal/Modal';
import Typography from 'components/Typography/Typography';
import useGet from 'hooks/useGet';
import { HOME } from 'routes/AuthenticatedRoutes';

import BookDetailsLoader from './components/BookDetailsLoader/BookDetailsLoader';
import { Book } from '../../interfaces';
import {
  AboutBookContainer,
  BookCover,
  Description,
  DetailsContainer,
  InfosContainer,
  SingleInfoContainer,
  TitleAndAuthorContainer
} from './Styled';

interface BookDetailsModalProps {
  bookId: string;
  isOpen: boolean;
  onClose: () => void;
}

const BookDetailsModal = ({
  bookId,
  isOpen,
  onClose
}: BookDetailsModalProps): JSX.Element | null => {
  const { page } = useParams<{ page: string }>();
  const { push } = useHistory();

  if (!isOpen) {
    return null;
  }

  const { data, error } = useGet<Book>(`/books/${bookId}`);

  if (error) {
    push(`${HOME}/${page}`);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {data ? (
        <DetailsContainer>
          <BookCover src={data.imageUrl} />
          <AboutBookContainer>
            <TitleAndAuthorContainer>
              <Typography component="h1" variant="titleBold">
                {data.title}
              </Typography>
              {data.authors.map((author, index, authors) => (
                <Typography
                  color="primary"
                  component="span"
                  key={author}
                  variant="subtitleThin"
                >
                  {author}
                  {index !== authors.length - 1 && ', '}
                </Typography>
              ))}
            </TitleAndAuthorContainer>

            <Typography component="h2" variant="subtitleBold">
              INFORMAÇÕES
            </Typography>
            <InfosContainer>
              <SingleInfoContainer>
                <Typography component="h3" variant="subtitleBold">
                  Páginas
                </Typography>
                <Typography
                  color="gray"
                  component="span"
                  variant="subtitleThin"
                >
                  {data.pageCount}
                </Typography>
              </SingleInfoContainer>

              <SingleInfoContainer>
                <Typography component="h3" variant="subtitleBold">
                  Editora
                </Typography>
                <Typography
                  color="gray"
                  component="span"
                  variant="subtitleThin"
                >
                  {data.publisher}
                </Typography>
              </SingleInfoContainer>

              <SingleInfoContainer>
                <Typography component="h3" variant="subtitleBold">
                  Publicação
                </Typography>
                <Typography
                  color="gray"
                  component="span"
                  variant="subtitleThin"
                >
                  {data.published}
                </Typography>
              </SingleInfoContainer>

              <SingleInfoContainer>
                <Typography component="h3" variant="subtitleBold">
                  Idioma
                </Typography>
                <Typography
                  color="gray"
                  component="span"
                  variant="subtitleThin"
                >
                  {data.language}
                </Typography>
              </SingleInfoContainer>

              <SingleInfoContainer>
                <Typography component="h3" variant="subtitleBold">
                  Título original
                </Typography>
                <Typography
                  color="gray"
                  component="span"
                  variant="subtitleThin"
                >
                  {data.title}
                </Typography>
              </SingleInfoContainer>

              <SingleInfoContainer>
                <Typography component="h3" variant="subtitleBold">
                  ISBN-10
                </Typography>
                <Typography
                  color="gray"
                  component="span"
                  variant="subtitleThin"
                >
                  {data.isbn10}
                </Typography>
              </SingleInfoContainer>

              <SingleInfoContainer>
                <Typography component="h3" variant="subtitleBold">
                  ISBN-13
                </Typography>
                <Typography
                  color="gray"
                  component="span"
                  variant="subtitleThin"
                >
                  {data.isbn13}
                </Typography>
              </SingleInfoContainer>
            </InfosContainer>

            <Typography component="h3" variant="subtitleBold">
              RESENHA DA EDITORA
            </Typography>
            <Description color="gray" component="p" variant="body">
              <QuotesIcon /> {data.description}
            </Description>
          </AboutBookContainer>
        </DetailsContainer>
      ) : (
        <BookDetailsLoader />
      )}
    </Modal>
  );
};

export default BookDetailsModal;
