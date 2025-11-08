import { User } from './modules/user.dto';

export class UserService {
    public readonly headers = { accept: 'application/json' };
    public constructor(private BaseURL: string) {}

    public async GetUserByName(username: string): Promise<User> {
        const response = await fetch(`${this.BaseURL}/v2/user/${username}`, { headers: this.headers });
        const responseJson = await response.json();
        return responseJson;
    }
}
