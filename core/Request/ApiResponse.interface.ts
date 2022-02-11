interface Success<T> {
  kind: 'Success';
  data: T;
}

interface Error {
  kind: 'Error';
  reason: string;
  code: number | string;
}

export type ApiResponse<T> = Promise<Success<T> | Error>;
