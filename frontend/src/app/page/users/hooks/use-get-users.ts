import { useState } from 'react';

import { userApiService } from '@app/api/service/user-api-service.ts';
import { NotificationService } from '@app/services/notification-service.ts';
import { RequestState } from '@app/typings/request-state.ts';

export const useGetUsers = () => {
  const [requestState, setRequestState] = useState<RequestState | undefined>();
  const [users, setUsers] = useState<Backend.User[] | undefined>(undefined);

  const getUsers = async () => {
    setRequestState(RequestState.PENDING);
    try {
      const usersResponse = await userApiService.getUsers();

      setUsers(usersResponse);
      setRequestState(RequestState.SUCCESS);
    } catch (_err) {
      NotificationService.error('Could not fetch users');
      setRequestState(RequestState.FAILED);
    }
  };

  return { requestState, users, getUsers };
};
