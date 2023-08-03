import { RestService } from '@app/api/common';

class UserApiService {
  private readonly backendRestService: RestService;

  private static readonly BASE_PATH = '/user';

  public constructor() {
    this.backendRestService = new RestService();
  }

  public readonly getUsers = (): Promise<Backend.User[]> =>
    this.backendRestService.get<Backend.User[]>(UserApiService.BASE_PATH);

  public readonly getUser = (id: number): Promise<Backend.User> =>
    this.backendRestService.get<Backend.User>(
      `${UserApiService.BASE_PATH}/${id}`,
    );

  public readonly createUser = (
    createUserForm: Backend.CreateUserForm,
  ): Promise<Backend.User> =>
    this.backendRestService.post<Backend.User>(
      UserApiService.BASE_PATH,
      createUserForm,
    );

  public readonly editUser = (
    id: number,
    editUserForm: Backend.EditUserForm,
  ): Promise<Backend.User> =>
    this.backendRestService.put<Backend.User>(
      `${UserApiService.BASE_PATH}/${id}`,
      editUserForm,
    );

  public readonly deleteUser = (id: number): Promise<void> =>
    this.backendRestService.delete<void>(`${UserApiService.BASE_PATH}/${id}`);
}

const userApiService = new UserApiService();

export { userApiService };
