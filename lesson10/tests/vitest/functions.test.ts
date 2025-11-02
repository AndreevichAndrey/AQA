import { describe, it, expect } from 'vitest';
import { ApiObjectsDtoData, getUserInfo } from '../../src/index';
import { ApiObjectShortInfo } from '../../src/models/api-objects.dto.classUserInfo';

describe('test for ApiObjectsDtoData', () => {
    it('should return array of objects with expected keys', async () => {
        const data = await ApiObjectsDtoData();
        expect(Array.isArray(data)).toBe(true);

        const keys = ['id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company'];
        for (const key of keys) {
            expect(data[0]).toHaveProperty(key);
        }
    });
});

describe('test for getUserInfo', () => {
    it('should map ApiObjectsDto to ApiObjectShortInfo correctly', async () => {
        const result = await getUserInfo();
        expect(Array.isArray(result)).toBe(true);
        expect(result[0]).toBeInstanceOf(ApiObjectShortInfo);

        const keys = ['id', 'name', 'username', 'email'];
        for (const key of keys) {
            expect(result[0]).toHaveProperty(key);
        }
    });
});
