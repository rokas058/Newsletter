import { RestService } from '@app/api/common';

class AuthenticationApiService {
  private readonly backendRestService: RestService;

  public constructor() {
    this.backendRestService = new RestService();
  }

  public readonly authenticate = (
    request: Backend.LoginData,
  ): Promise<Backend.Session> =>
    this.backendRestService.post<Backend.Session>('/session', request);

  public readonly getSession = (): Promise<Backend.Session> =>
    this.backendRestService.get<Backend.Session>('/session');

  public readonly logout = (): Promise<void> =>
    this.backendRestService.delete<void>('/logout');
}

const authenticationApiService = new AuthenticationApiService();

export { authenticationApiService };
