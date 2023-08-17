import { useState } from 'react';

import { NotificationService } from '@app/services/notification-service.ts';
import { RequestState } from '@app/typings/request-state.ts';
import { pageApiService } from '@app/api/service/page-api-service.ts';

export const useGetPage = () => {
  const [requestState, setRequestState] = useState<RequestState | undefined>();
  const [page, setPage] = useState<Backend.Page | undefined>(undefined);

  const getPage = async (pageId: number | undefined) => {
    setRequestState(RequestState.PENDING);
    try {
      const pageResponse = await pageApiService.getPageById(pageId);

      setPage(pageResponse);
      setRequestState(RequestState.SUCCESS);
    } catch (_err) {
      NotificationService.error('Could not get page information');
      setRequestState(RequestState.FAILED);
    }
  };

  return { page, requestState, getPage };
};
