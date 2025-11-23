import { HttpClient } from './http-client';
import { Cat } from './types';

export class CatService {
    public constructor(private client: HttpClient) {}

    public async getRandomCat(): Promise<Cat[]> {
        return this.client.request<Cat[]>('/images/search');
    }

    public async getCatById(id: string): Promise<Cat> {
        return this.client.request<Cat>(`/images/${id}`);
    }
}
