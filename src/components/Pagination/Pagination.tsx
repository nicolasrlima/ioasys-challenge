import React from 'react';

import { ReactComponent as ChevronDark } from 'assets/chevron-dark.svg';
import Typography from 'components/Typography/Typography';

import {
  PagesNavigation,
  PaginationButtonNext,
  PaginationButtonPrevious,
  PaginationContainer
} from './Styled';

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
}

const Pagination = ({
  currentPage,
  onPageChange,
  totalPages
}: PaginationProps): JSX.Element => {
  const totalPagesCeil = Math.ceil(totalPages);

  const goToPreviousPage = (): void => {
    onPageChange(+currentPage - 1);
  };

  const goToNextPage = (): void => {
    onPageChange(+currentPage + 1);
  };

  return (
    <PaginationContainer>
      <PagesNavigation>
        <PaginationButtonPrevious
          disabled={+currentPage === 1}
          type="button"
          onClick={goToPreviousPage}
        >
          <ChevronDark />
        </PaginationButtonPrevious>
        <Typography component="span">
          Página <strong>{currentPage}</strong> de{' '}
          <strong>{totalPagesCeil}</strong>
        </Typography>
        <PaginationButtonNext
          disabled={+currentPage === totalPagesCeil}
          type="button"
          onClick={goToNextPage}
        >
          <ChevronDark />
        </PaginationButtonNext>
      </PagesNavigation>
    </PaginationContainer>
  );
};

export default Pagination;
