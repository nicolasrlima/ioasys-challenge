import React from 'react';

import Typography from 'components/Typography/Typography';

import {
  BookCover,
  BookDetailsContainer,
  BookInfoContainer,
  BookTitleAndAuthorContainer,
  CardContainer
} from './Styled';

interface CardProps {
  author: string;
  imageUrl: string;
  onClick: () => void;
  pageCount: number;
  published: number;
  publisher: string;
  title: string;
}

const Card = ({
  author,
  imageUrl,
  onClick,
  pageCount,
  published,
  publisher,
  title
}: CardProps): JSX.Element => (
  <CardContainer onClick={onClick}>
    <BookCover src={imageUrl} alt={`Capa do livro ${title}`} />
    <BookInfoContainer>
      <BookTitleAndAuthorContainer>
        <Typography component="h2" variant="subtitleBold">
          {title}
        </Typography>
        <Typography color="primary" component="h2" variant="subtitleThin">
          {author}
        </Typography>
      </BookTitleAndAuthorContainer>

      <BookDetailsContainer>
        <Typography component="h2" color="gray" variant="subtitleThin">
          {pageCount} páginas
        </Typography>
        <Typography component="h2" color="gray" variant="subtitleThin">
          Editora {publisher}
        </Typography>
        <Typography component="h2" color="gray" variant="subtitleThin">
          Publicado em {published}
        </Typography>
      </BookDetailsContainer>
    </BookInfoContainer>
  </CardContainer>
);

export default Card;
