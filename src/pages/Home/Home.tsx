import React from 'react';

import { useParams, useHistory } from 'react-router-dom';

import Card from 'components/Card/Card';
import Pagination from 'components/Pagination/Pagination';
import useGet from 'hooks/useGet';
import { HOME } from 'routes/AuthenticatedRoutes';

import HomeLoader from './components/HomeLoader/HomeLoader';
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
  const { push } = useHistory();

  const { data } = useGet<{
    data: Book[];
    totalItems: number;
    totalPages: number;
  }>('/books', {
    page,
    amount: '12'
  });

  const goToPage = (newPage: number): void => {
    push(`${HOME}/${newPage}`);
  };

  return (
    <BookListContainer>
      {data ? (
        <>
          {data.data.map(
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
          <Pagination
            currentPage={page}
            onPageChange={goToPage}
            totalPages={data.totalPages}
          />
        </>
      ) : (
        <HomeLoader cardsCount={12} />
      )}
    </BookListContainer>
  );
};

export default Home;
