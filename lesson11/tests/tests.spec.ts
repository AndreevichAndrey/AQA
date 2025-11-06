import { expect } from 'chai';
import sinon from 'sinon';
import { RegularUser, AdminUser, Moderator } from '../src/models/abstractions';

describe('homework tests', () => {
    afterEach(() => {
        sinon.restore();
    });

    // sendMessage RegularUser
    it('should call sendMessage on RegularUser when notifyAll is called', () => {
        const user1 = new RegularUser(1, 'Andrey', 'andrey@gmail.com');
        const user2 = new RegularUser(2, 'Vasya', 'vasya@gmail.com');
        const admin = new AdminUser(99, 'Kate', 'superadmin');
        const mod = new Moderator(admin, [user1, user2]);

        const spy1 = sinon.spy(user1, 'sendMessage');
        const spy2 = sinon.spy(user2, 'sendMessage');

        mod.notifyAll('Hello');

        expect(spy1.calledOnceWith('Hello')).to.be.true;
        expect(spy2.calledOnceWith('Hello')).to.be.true;
    });

    //banUser  AdminUser
    it('should call banUser on AdminUser when Moderator.banUser is called', () => {
        const user = new RegularUser(3, 'Petya', 'petya@gmail.com');
        const admin = new AdminUser(99, 'Kate', 'superadmin');
        const mod = new Moderator(admin, [user]);

        const spy = sinon.spy(admin, 'banUser');
        mod.banUser(user);

        expect(spy.calledOnceWith(user)).to.be.true;
    });

    // getInfo RegularUser
    it('should return info from RegularUser.getInfo', () => {
        const user = new RegularUser(1, 'Andrey', 'andrey@gmail.com');
        const info = user.getInfo();
        expect(info).to.equal('Regular User: Andrey, email: andrey@gmail.com');
    });

    //  greet мок console.log
    it('should call console.log on greet', () => {
        const user = new RegularUser(1, 'Andrey', 'andrey@gmail.com');
        const logSpy = sinon.spy(console, 'log');

        user.greet();

        expect(logSpy.calledOnceWith('Hello, Andrey!')).to.be.true;
    });

    // Moderator spec user
    it('should notify only specific users when using notifyAll', () => {
        const user1 = new RegularUser(1, 'Alice', 'alice@test.com');
        const user2 = new RegularUser(2, 'Bob', 'bob@test.com');
        const user3 = new RegularUser(3, 'Charlie', 'charlie@test.com');
        const admin = new AdminUser(10, 'Admin', 'superadmin');

        const mod = new Moderator(admin, [user1, user2]);
        const spy1 = sinon.spy(user1, 'sendMessage');
        const spy2 = sinon.spy(user2, 'sendMessage');
        const spy3 = sinon.spy(user3, 'sendMessage');

        mod.notifyAll('Test message');

        expect(spy1.calledOnceWith('Test message')).to.be.true;
        expect(spy2.calledOnceWith('Test message')).to.be.true;
        expect(spy3.notCalled).to.be.true;
    });
});
