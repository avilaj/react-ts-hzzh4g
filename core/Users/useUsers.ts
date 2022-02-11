import { useState } from 'react';
import { UsersState, UserFetcherFunction } from './interfaces';

interface HookDependencies {
  UsersFetcher: UserFetcherFunction;
}

export const useUsers = ({ UsersFetcher }: HookDependencies) => {
  const [users, setUsers] = useState<UsersState>({ kind: 'Loading' });

  const onFetchUsers = async () => {
    // validate min and max page
    setUsers({ kind: 'Loading' });
    const result = await UsersFetcher();
    switch (result.kind) {
      case 'Error':
        setUsers({ kind: 'Error', reason: 'There was an error.' });
        break;
      case 'Success':
        setUsers({ kind: 'Ready', users: result.data.users });
        break;
    }
  };
  return { users, onFetchUsers };
};
