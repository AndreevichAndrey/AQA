import { ApiObjectsDto } from './models/api-objects.dto';
import { ApiObjectShortInfo } from './models/api-objects.dto.classUserInfo';

// Написати функцію, яка надсилатиме запит на вебресурс  і повертатиме типізований об’єкт.
async function ApiObjectsDtoData(): Promise<ApiObjectsDto[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    return json as ApiObjectsDto[];
}

// (async () => {
//     try {
//         const returnedApiObj = await ApiObjectsDtoData();
//         console.log(JSON.stringify(returnedApiObj, null, 1));
//     } catch (err) {
//         console.error(err);
//     }
// })();

// Написати іншу функцію, яка братиме отриманий об’єкт і переводитиме його в інший.
async function getUserInfo(): Promise<ApiObjectShortInfo[]> {
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
