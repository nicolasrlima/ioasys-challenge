import React, { useEffect } from 'react';

import { useParams, useHistory } from 'react-router-dom';

import Card from 'components/Card/Card';
import Pagination from 'components/Pagination/Pagination';
import useGet from 'hooks/useGet';
import { HOME } from 'routes/AuthenticatedRoutes';

import BookDetailsModal from './components/BookDetailsModal/BookDetailsModal';
import HomeLoader from './components/HomeLoader/HomeLoader';
import { Book } from './interfaces';
import { BookListContainer } from './Styled';

const Home = (): JSX.Element => {
  const { page, bookId } = useParams<{ page: string; bookId: string }>();
  const { push } = useHistory();

  const { data } = useGet<{
    data: Book[];
    totalItems: number;
    totalPages: number;
  }>('/books', {
    page,
    amount: '12'
  });

  const openDetailsModal = (newBookToDetailId: string): void => {
    push(`${HOME}/${page}/${newBookToDetailId}`);
  };

  const closeDetailsModal = (): void => {
    push(`${HOME}/${page}`);
  };

  const goToPage = (newPage: number): void => {
    push(`${HOME}/${newPage}`);
  };

  useEffect(() => {
    if (data && page > data?.totalPages) {
      push(`${HOME}/1`);
    }
  }, [data]);

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
                onClick={() => openDetailsModal(id)}
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
          <BookDetailsModal
            bookId={bookId}
            isOpen={Boolean(bookId)}
            onClose={closeDetailsModal}
          />
        </>
      ) : (
        <HomeLoader cardsCount={12} />
      )}
    </BookListContainer>
  );
};

export default Home;
