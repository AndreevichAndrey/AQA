import { HttpClient } from '../src/api/http-client';
import { CatService } from '../src/api/cats-api-service';
import { BASE_URL } from '../src/config/config';

const client = new HttpClient(BASE_URL);
const catService = new CatService(client);

describe('Cat API', () => {
    it('should fetch a random cat', async () => {
        const cats = await catService.getRandomCat();
        expect(cats.length).toBeGreaterThan(0);
        expect(cats[0]).toHaveProperty('id');
        expect(cats[0]).toHaveProperty('url');
    });

    it('should fetch a cat by ID', async () => {
        const cats = await catService.getRandomCat();
        const cat = await catService.getCatById(cats[0].id);
        expect(cat.id).toBe(cats[0].id);
    });

    it('should return different cats on multiple random requests', async () => {
        const firstCat = (await catService.getRandomCat())[0];
        const secondCat = (await catService.getRandomCat())[0];
        expect(firstCat.id).not.toBe(secondCat.id);
    });

    it('should return a cat with correct fields', async () => {
        const cat = (await catService.getRandomCat())[0];
        expect(typeof cat.id).toBe('string');
        expect(typeof cat.url).toBe('string');
        expect(typeof cat.width).toBe('number');
        expect(typeof cat.height).toBe('number');
    });

    it('should handle invalid cat ID gracefully', async () => {
        await expect(catService.getCatById('invalid-id')).rejects.toThrow();
    });
});
