export interface Book {
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
