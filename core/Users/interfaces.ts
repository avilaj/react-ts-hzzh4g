import { ApiResponse } from '../Request';

export interface User {
  id: string;
  name: string;
}
export interface Pagination {
  page: number;
  totalPages: number;
  totalResults: number;
}

interface Loading {
  kind: 'Loading';
}

interface Error {
  kind: 'Error';
  reason: string;
}

interface Ready {
  kind: 'Ready';
  users: User[];
}

export type UsersState = Error | Loading | Ready;

export type UsersListFetchResponse = ApiResponse<{
  users: User[];
}>;
export type UserFetcherFunction = () => UsersListFetchResponse;
