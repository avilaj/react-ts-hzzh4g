import { UserFetcherFunction } from './interfaces';
import { request } from '../Request';

// @todo: move to env variables
const USERS_API = 'https://jsonplaceholder.typicode.com/users';

export const UsersFetcher: UserFetcherFunction = async () => {
  try {
    const result = await request.get(USERS_API);
    return { kind: 'Success', data: result.data };
  } catch (err) {
    return { kind: 'Error', code: err.code, reason: err.message };
  }
};
