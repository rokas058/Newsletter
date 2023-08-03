export class NavigationService {
  public static readonly HOME_PATH = '/home';
  public static readonly LOGIN_PATH = '/login';
  public static readonly ERROR_PATH = '/error';
  public static readonly LOGOUT_PATH = '/logout';
  public static readonly USERS_PATH = '/users';
  public static readonly EDIT_USER_PATH = `${NavigationService.USERS_PATH}/edit/:userId`;
  public static readonly ADD_USER_PATH = `${NavigationService.USERS_PATH}/add`;
}
