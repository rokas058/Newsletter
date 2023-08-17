import { useState } from 'react';

import { NotificationService } from '@app/services/notification-service.ts';
import { RequestState } from '@app/typings/request-state.ts';
import { pageApiService } from '@app/api/service/page-api-service.ts';

export const useEditSection = () => {
  const [requestState, setRequestState] = useState<RequestState | undefined>();

  const editSection = async (
    sectionId: number,
    editSectionForm: Backend.Section,
  ) => {
    try {
      await pageApiService.editSection(sectionId, editSectionForm);
      setRequestState(RequestState.SUCCESS);
      NotificationService.success('Changes saved');
    } catch (_err) {
      NotificationService.error('Could not edit section');
      setRequestState(RequestState.FAILED);
    }
  };

  return { requestState, editSection };
};
