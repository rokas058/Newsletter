import { useState } from 'react';

import { NotificationService } from '@app/services/notification-service.ts';
import { pageApiService } from '@app/api/service/page-api-service.ts';

export const useDeleteSection = () => {
  const [loading, setLoading] = useState(false);

  const deleteSection = async (sectionId: number | undefined) => {
    setLoading(true);
    try {
      await pageApiService.deleteSection(sectionId);
    } catch (_err) {
      NotificationService.error('Could not delete section');
    } finally {
      setLoading(false);
    }
  };

  return { loading, deleteSection };
};
