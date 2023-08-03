import { useState } from 'react';

import { userApiService } from '@app/api/service/user-api-service.ts';
import { NotificationService } from '@app/services/notification-service.ts';
import { RequestState } from '@app/typings/request-state.ts';

export const useEditUser = () => {
  const [requestState, setRequestState] = useState<RequestState | undefined>();

  const editUser = async (id: number, editUserForm: Backend.EditUserForm) => {
    try {
      await userApiService.editUser(id, editUserForm);
      setRequestState(RequestState.SUCCESS);
      NotificationService.success('Changes saved');
    } catch (_err) {
      NotificationService.error('Could not edit user');
      setRequestState(RequestState.FAILED);
    }
  };

  return { requestState, editUser };
};
