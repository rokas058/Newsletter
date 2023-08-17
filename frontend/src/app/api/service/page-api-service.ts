import { RestService } from '@app/api/common';

class PageApiService {
  private static readonly BASE_PATH = '/page';
  private static readonly SECTION_PATH = '/section';
  private static readonly IMAGE_PATH = '/image';
  private readonly backendRestService: RestService;

  public constructor() {
    this.backendRestService = new RestService();
  }

  public readonly getPageById = (
    pageId: number | undefined,
  ): Promise<Backend.Page> =>
    this.backendRestService.get<Backend.Page>(
      `${PageApiService.BASE_PATH}/${pageId}`,
    );

  public readonly deleteSection = (
    sectionId: number | undefined,
  ): Promise<void> =>
    this.backendRestService.delete<void>(
      `${PageApiService.SECTION_PATH}/${sectionId}`,
    );

  public readonly editSection = (
    sectionId: number,
    editSectionForm: Backend.Section,
  ): Promise<Backend.Section> =>
    this.backendRestService.put<Backend.Section>(
      `${PageApiService.SECTION_PATH}/${sectionId}`,
      editSectionForm,
    );

  public readonly createSection = (
    createSectionForm: Backend.Section,
  ): Promise<Backend.Section> =>
    this.backendRestService.post<Backend.Section>(
      PageApiService.SECTION_PATH,
      createSectionForm,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

  public readonly getImageBySectionId = (
    sectionId: number | undefined,
  ): Promise<Backend.Image> =>
    this.backendRestService.get<Backend.Image>(
      `${PageApiService.IMAGE_PATH}/${sectionId}`,
    );
}

const pageApiService = new PageApiService();

export { pageApiService };
