// Абстрактный базовый класс
export abstract class User {
    public constructor(
        public id: number,
        public name: string
    ) {}

    public abstract getInfo(): string;

    public greet(): void {
        console.log(`Hello, ${this.name}!`);
    }
}

export class RegularUser extends User {
    public constructor(
        id: number,
        name: string,
        public email: string
    ) {
        super(id, name);
    }

    public getInfo(): string {
        return `Regular User: ${this.name}, email: ${this.email}`;
    }

    public sendMessage(msg: string): void {
        console.log(`Message to ${this.name}: ${msg}`);
    }
}

export class AdminUser extends User {
    public constructor(
        id: number,
        name: string,
        public role: string
    ) {
        super(id, name);
    }

    public getInfo(): string {
        return `Admin User: ${this.name}, role: ${this.role}`;
    }

    public banUser(user: User): void {
        console.log(`${this.name} banned ${user.name}`);
    }
}

export class Moderator {
    public constructor(
        private admin: AdminUser,
        private users: RegularUser[]
    ) {}

    public notifyAll(msg: string): void {
        this.users.forEach((u) => u.sendMessage(msg));
    }

    public banUser(user: RegularUser): void {
        this.admin.banUser(user);
    }
}
