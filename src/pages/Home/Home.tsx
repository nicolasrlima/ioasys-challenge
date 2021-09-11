import React from 'react';

import { useParams } from 'react-router-dom';

import Card from 'components/Card/Card';
import useGet from 'hooks/useGet';

import { BookListContainer } from './Styled';

interface Book {
  id: string;
  title: string;
  description: string;
  authors: string[];
  pageCount: number;
  category: string;
  imageUrl: string;
  isbn10: number;
  isbn13: number;
  language: string;
  publisher: string;
  published: number;
}

const Home = (): JSX.Element => {
  const { page } = useParams<{ page: string }>();

  const { data } = useGet<{ data: Book[] }>('/books', {
    page,
    amount: '12'
  });

  return (
    <BookListContainer>
      {data &&
        data.data.map(
          ({
            id,
            title,
            authors,
            imageUrl,
            pageCount,
            publisher,
            published
          }: Book) => (
            <Card
              author={authors[0]}
              key={id}
              imageUrl={imageUrl}
              pageCount={pageCount}
              published={published}
              publisher={publisher}
              title={title}
            />
          )
        )}
    </BookListContainer>
  );
};

export default Home;
