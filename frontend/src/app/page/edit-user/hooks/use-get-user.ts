import { useState } from 'react';

import { userApiService } from '@app/api/service/user-api-service.ts';
import { NotificationService } from '@app/services/notification-service.ts';
import { RequestState } from '@app/typings/request-state.ts';

export const useGetUser = () => {
  const [requestState, setRequestState] = useState<RequestState | undefined>();
  const [user, setUser] = useState<Backend.User | undefined>(undefined);

  const getUser = async (id: number) => {
    setRequestState(RequestState.PENDING);
    try {
      const userResponse = await userApiService.getUser(id);

      setUser(userResponse);
      setRequestState(RequestState.SUCCESS);
    } catch (_err) {
      NotificationService.error('Could not get user');
      setRequestState(RequestState.FAILED);
    }
  };

  return { user, requestState, getUser };
};
