import { useState } from 'react';

import { NotificationService } from '@app/services/notification-service.ts';
import { pageApiService } from '@app/api/service/page-api-service.ts';

export const useAddSection = () => {
  const [loading, setLoading] = useState(false);

  const addSection = async (createSectionForm: Backend.Section) => {
    setLoading(true);
    try {
      await pageApiService.createSection(createSectionForm);
    } catch (_err) {
      NotificationService.error('Could not create section');
    } finally {
      setLoading(false);
    }
  };

  return { loading, addSection };
};
