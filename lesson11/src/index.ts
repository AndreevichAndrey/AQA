import { ApiObjectsDto } from './models/api-objects.dto';
import { ApiObjectShortInfo } from './models/api-objects.dto.classUserInfo';

async function ApiObjectsDtoData(): Promise<ApiObjectsDto[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    return json as ApiObjectsDto[];
}

export async function getUserInfo(): Promise<ApiObjectShortInfo[]> {
    const userInfo = await ApiObjectsDtoData();
    return userInfo.map((i) => new ApiObjectShortInfo(i));
}
(async () => {
    try {
        const shortUserInfo = await getUserInfo();
        console.log(shortUserInfo);
    } catch (err) {
        console.error(err);
    }
})();
