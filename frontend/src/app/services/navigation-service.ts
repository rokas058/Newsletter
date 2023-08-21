export class NavigationService {
  public static readonly HOME_PATH = '/home';
  public static readonly HOME_PATH_WITH_ID = '/home/:id';
  public static readonly LOGIN_PATH = '/login';
  public static readonly ERROR_PATH = '/error';
  public static readonly LOGOUT_PATH = '/logout';
  public static readonly USERS_PATH = '/users';
  public static readonly NEWBIES_PATH = `${NavigationService.HOME_PATH}/:id/newbies`;
  public static readonly NEWS_PATH = `${NavigationService.HOME_PATH}/:id/news`;
  public static readonly VACANCIES_PATH = `${NavigationService.HOME_PATH}/:id/vacancies`;
  public static readonly UKRAINA_PATH = `${NavigationService.HOME_PATH}/:id/ukraine`;
  public static readonly HR_PATH = `${NavigationService.HOME_PATH}/:id/hr`;
  public static readonly CALENDAR_PATH = `${NavigationService.HOME_PATH}/:id/calendar`;
  public static readonly TRAVEL_PATH = `${NavigationService.HOME_PATH}/:id/travel`;
  public static readonly OFFTOPIC_PATH = `${NavigationService.HOME_PATH}/:id/off-topic`;
  public static readonly JOKES_PATH = `${NavigationService.HOME_PATH}/:id/jokes`;
  public static readonly EDIT_USER_PATH = `${NavigationService.USERS_PATH}/edit/:userId`;
  public static readonly ADD_USER_PATH = `${NavigationService.USERS_PATH}/add`;
  public static readonly NEWSLETTERS_PATH = '/newsletters';
  public static readonly CAREER_PAGE =
    'https://www.tietoevry.com/en/careers/search-our-jobs/?country=Lithuania&city=&area=&role=&organization=&q=';
}
