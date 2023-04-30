type ApiClientConfig = {
  baseURL: string;
  headers?: Record<string, string>;
};

export class ApiClient {
  config: ApiClientConfig;

  constructor(config: ApiClientConfig) {
    this.config = config;
  }

  async #buildFetch<T>(method: string, url: string, init?: RequestInit) {
    const response = await fetch(new URL(url, this.config.baseURL), {
      ...init,
      method,
      headers: {
        "Content-Type": "application/json",
        ...this.config.headers,
        ...init?.headers,
      },
      body:
        init?.body && !("Content-Type" in (init?.headers ?? {}))
          ? JSON.stringify(init.body)
          : init?.body,
    });

    const data: T = await response.json();
    return { response, data };
  }

  get<T = any>(url: string, init?: RequestInit) {
    return this.#buildFetch<T>("GET", url, init);
  }

  post(url: string, init?: Omit<RequestInit, "body"> & { body: any }) {
    return this.#buildFetch("POST", url, init);
  }

  put(url: string, init?: Omit<RequestInit, "body"> & { body: any }) {
    return this.#buildFetch("PUT", url, init);
  }

  delete(url: string, init?: RequestInit) {
    return this.#buildFetch("DELETE", url, init);
  }
}
