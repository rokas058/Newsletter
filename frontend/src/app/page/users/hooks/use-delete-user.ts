import { useState } from 'react';

import { userApiService } from '@app/api/service/user-api-service.ts';
import { NotificationService } from '@app/services/notification-service.ts';

export const useDeleteUser = () => {
  const [loading, setLoading] = useState(false);

  const deleteUser = async (id: number) => {
    setLoading(true);
    try {
      await userApiService.deleteUser(id);
    } catch (_err) {
      NotificationService.error('Could not delete user');
    } finally {
      setLoading(false);
    }
  };

  return { loading, deleteUser };
};
