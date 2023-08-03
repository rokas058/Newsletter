import { RequestState } from '@app/typings/request-state.ts';

export class RequestUtils {
  public static isRequestPending = (requestState?: RequestState) =>
    requestState === RequestState.PENDING;

  public static isRequestCompleted = (requestState?: RequestState) =>
    requestState === RequestState.FAILED ||
    requestState === RequestState.SUCCESS;
}
