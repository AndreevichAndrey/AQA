import { UserService } from 'src/pet-store-service';
import { MatchersV3, PactV3, Verifier } from '@pact-foundation/pact';
import { User } from 'src/modules/user.dto';
import { expect } from 'chai';
import * as path from 'path';

describe('Petstore API contract test /users', () => {
    let userService: UserService;

    const provider = new PactV3({
        consumer: 'PetstoreConsumer',
        provider: 'PetstoreAPI'
    });

    const expectedResponse: User = {
        id: 9223372036854769000,
        username: 'user1',
        firstName: 'John',
        lastName: 'Johnson',
        email: 'user1@mail.ru',
        password: '12345',
        phone: '89607075876',
        userStatus: 0
    };
    const expectedBody = MatchersV3.like(expectedResponse);

    describe('Get user test', () => {
        it('should return user info ', async () => {
            await provider
                .given('successful operation')
                .uponReceiving('request for user')
                .withRequest({
                    method: 'GET',
                    path: '/v2/user/user1',
                    headers: { accept: 'application/json' }
                })
                .willRespondWith({ status: 200, headers: { 'content-type': 'application/json' }, body: expectedBody })
                .executeTest(async (mockServer) => {
                    userService = new UserService(mockServer.url);
                    const user = await userService.GetUserByName('user1');

                    expect(user.username).to.equal('user1');
                    expect(user.firstName).to.equal('John');
                    expect(user.lastName).to.equal('Johnson');
                    expect(user.email).to.equal('user1@mail.ru');
                    expect(typeof user.id).to.equal('number');
                });
        });
    });
    describe('Petstore API provider contract verification', () => {
        it('verify contact', () => {
            return new Verifier({
                providerBaseUrl: 'https://petstore.swagger.io',
                pactUrls: [path.resolve(process.cwd(), 'pacts', 'PetstoreConsumer-PetstoreAPI.json')]
            })
                .verifyProvider()
                .then(() => {
                    console.log('contract verified');
                });
        });
    });
});
