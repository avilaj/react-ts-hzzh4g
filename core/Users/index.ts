import { useUsers as _useUsers } from './useUsers';
import { UsersFetcher } from './Users.repo';

// just adds the dependencies of the hook
export const useUsers = () => _useUsers({ UsersFetcher });
