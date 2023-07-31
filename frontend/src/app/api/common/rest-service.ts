import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class RestService {
  private readonly axiosInstance: AxiosInstance;

  public constructor() {
    this.axiosInstance = axios.create({
      baseURL: '/api',
    });

    this.axiosInstance.interceptors.request.use(
      (request) =>
        // handle request interception here
        request,
    );

    this.axiosInstance.interceptors.response.use(
      (response) => response.data,
      (error) =>
        // handle exceptional BE errors here
        Promise.reject(error.response),
    );
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.get(url, config);
  }

  public post<T>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.axiosInstance.post(url, data, config);
  }

  public delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.delete(url, config);
  }

  public put<T>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.axiosInstance.put(url, data, config);
  }

  public patch<T>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.axiosInstance.patch(url, data, config);
  }
}

export { RestService };
