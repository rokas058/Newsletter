import { useState } from 'react';

import { userApiService } from '@app/api/service/user-api-service.ts';
import { NotificationService } from '@app/services/notification-service.ts';

export const useAddUser = () => {
  const [loading, setLoading] = useState(false);

  const addUser = async (createUserForm: Backend.CreateUserForm) => {
    setLoading(true);
    try {
      await userApiService.createUser(createUserForm);
    } catch (_err) {
      NotificationService.error('Could not add user');
    } finally {
      setLoading(false);
    }
  };

  return { loading, addUser };
};
