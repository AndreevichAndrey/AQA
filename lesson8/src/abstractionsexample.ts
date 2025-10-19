import { RegularUser, AdminUser, Moderator } from './models/abstractions';

const user1 = new RegularUser(1, 'Andrey', 'andrey@gmail.com');
const user2 = new RegularUser(2, 'Vasya', 'Vasya@gmail.com');
const admin = new AdminUser(99, 'Kate', 'superadmin');

console.log(user1.getInfo());
user1.greet();

console.log(admin.getInfo());
admin.greet();

const mod = new Moderator(admin, [user1, user2]);

mod.notifyAll('Welcome to the system!');
mod.banUser(user2);
