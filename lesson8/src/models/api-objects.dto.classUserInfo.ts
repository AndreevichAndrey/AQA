import { ApiObjectsDto } from './api-objects.dto';

export class ApiObjectShortInfo {
    public id: number;
    public name: string;
    public username: string;
    public email: string;

    public constructor(obj: ApiObjectsDto) {
        this.id = obj.id;
        this.name = obj.name;
        this.username = obj.username;
        this.email = obj.email;
    }
}
