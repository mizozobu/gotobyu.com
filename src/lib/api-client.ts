/**
 * REST API Response
 */
interface RestResponse<T> {
  status: number;
  headers: Headers;
  data: T;
}

/**
 * REST API client
 */
class RestClient {
  public async get<T>(
    endpoint: string,
    params?: ConstructorParameters<typeof URLSearchParams>[0],
  ): Promise<RestResponse<T>> {
    const url = new URL(endpoint);
    const searchParams = new URLSearchParams(params);
    url.search = searchParams.toString();

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return {
      status: res.status,
      headers: res.headers,
      data: (await res.json()) as T,
    };
  }

  // public async post<T>() {}
  // public async put<T>() {}
  // public async delete<T>() {}
}

export const rest = new RestClient();
