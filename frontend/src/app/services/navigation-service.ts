export class NavigationService {
  public static readonly HOME_PATH = '/home';
  public static readonly HOME_PATH_WITH_ID = '/home/:id';
  public static readonly LOGIN_PATH = '/login';
  public static readonly ERROR_PATH = '/error';
  public static readonly LOGOUT_PATH = '/logout';
  public static readonly USERS_PATH = '/users';
  public static readonly NEWBIES_PATH = '/newbies';
  public static readonly NEWS_PATH = '/news';
  public static readonly VACANCIES_PATH = '/vacancies';
  public static readonly UKRAINA_PATH = '/ukraina';
  public static readonly HR_PATH = '/hr';
  public static readonly CALENDAR_PATH = '/calendar';
  public static readonly TRAVEL_PATH = '/travel';
  public static readonly OFFTOPIC_PATH = '/offtopic';
  public static readonly JOKES_PATH = '/jokes';
  public static readonly EDIT_USER_PATH = `${NavigationService.USERS_PATH}/edit/:userId`;
  public static readonly ADD_USER_PATH = `${NavigationService.USERS_PATH}/add`;
  public static readonly NEWSLETTERS_PATH = '/newsletters';
}
