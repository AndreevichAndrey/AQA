import { expect } from 'chai';
import { RegularUser, Moderator, AdminUser } from 'src/models/abstractions';

describe('User classes', () => {
    describe('RegularUser', () => {
        const user = new RegularUser(1, 'Andrey', 'andrey@gmail.com');

        it('getInfo() should return correct string', () => {
            expect(user.getInfo()).to.equal('Regular User: Andrey, email: andrey@gmail.com');
        });

        it('should have correct id and name', () => {
            expect(user.id).to.equal(1);
            expect(user.name).to.equal('Andrey');
        });
    });

    describe('AdminUser', () => {
        const admin = new AdminUser(99, 'Kate', 'superadmin');

        it('getInfo() should return correct string', () => {
            expect(admin.getInfo()).to.equal('Admin User: Kate, role: superadmin');
        });

        it('banUser() should return correct string', () => {
            const userToBan = new RegularUser(2, 'Vasya', 'vasya@gmail.com');
            const result = `${admin.name} banned ${userToBan.name}`;
            expect(result).to.equal('Kate banned Vasya');
        });
    });

    describe('Moderator', () => {
        const admin = new AdminUser(99, 'Kate', 'superadmin');
        const user1 = new RegularUser(1, 'Andrey', 'andrey@gmail.com');
        const user2 = new RegularUser(2, 'Vasya', 'vasya@gmail.com');
        const mod = new Moderator(admin, [user1, user2]);

        it('notifyAll() should send correct messages', () => {
            const messages = mod['users'].map((u) => `Message to ${u.name}: Hello!`);
            expect(messages).to.deep.equal(['Message to Andrey: Hello!', 'Message to Vasya: Hello!']);
        });

        it('banUser() should return correct string via admin', () => {
            const result = `${mod['admin'].name} banned ${user2.name}`;
            expect(result).to.equal('Kate banned Vasya');
        });
    });
});
