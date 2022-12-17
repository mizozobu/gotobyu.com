/**
 * REST API Response
 */
export interface RestResponse<T> {
  status: number;
  headers: Headers;
  data: T;
}

/**
 * REST API client
 */
class RestClient {
  /**
   * Exec fetch, handle error, and format response
   * @param params args for {@link fetch}
   * @returns Response data
   */
  private async fetch<T>(
    ...params: Parameters<typeof fetch>
  ): Promise<RestResponse<T>> {
    const res = await fetch(...params);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return {
      status: res.status,
      headers: res.headers,
      data: (await res.json()) as T,
    };
  }

  /**
   * GET request
   * @param endpoint Endpoint
   * @param params Request params
   * @param options Request option
   * @returns Response data
   */
  public async get<T>(
    endpoint: string,
    params?: ConstructorParameters<typeof URLSearchParams>[0],
    options?: Omit<RequestInit, 'method'>,
  ): Promise<RestResponse<T>> {
    const url = new URL(endpoint);
    const searchParams = new URLSearchParams(params);
    url.search = searchParams.toString();

    return this.fetch(url, options);
  }

  /**
   * POST request
   * @param endpoint Endpoint
   * @param body Request body
   * @param options Request option
   * @returns Response data
   */
  public async post<S, T>(
    endpoint: string,
    body: S,
    options?: Omit<RequestInit, 'method' | 'body'>,
  ): Promise<RestResponse<T>> {
    return this.fetch(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  // public async put<T>() {}
  // public async delete<T>() {}
}

export const rest = new RestClient();
