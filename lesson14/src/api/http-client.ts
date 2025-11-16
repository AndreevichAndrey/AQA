import { API_KEY } from '../config/config';

export interface RequestOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    body?: undefined;
}

export class HttpClient {
    private baseUrl: string;

    public constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public async request<T>(path: string, options?: RequestOptions): Promise<T> {
        const res = await fetch(`${this.baseUrl}${path}`, {
            method: options?.method || 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY,
                ...(options?.headers || {})
            },
            body: options?.body ? JSON.stringify(options.body) : undefined
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        return res.json() as Promise<T>;
    }
}
