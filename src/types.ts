export type LoginReqType = {
  email: string;
  password: string;
};

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

export interface BooksState {
  books: BookType[] | null;
  loading: boolean;
  error: Error | null;
}
export interface RootState {
  auth: AuthState;
  books: BooksState;
}

export interface BookType {
  bookId: number;
  title: string;
  author: string;
  createAt: string;
  url: string;
}
