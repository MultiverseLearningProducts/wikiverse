const { db, User } = require('../server/models/index.js');
const { users } = require('../server/seedData.js');

describe('------ User model tests ------', () => {
    beforeAll(async () => {
        await db.sync({force: true});
    });

    it('can create a User', async () => {
        const newUser = await User.create(users[1]);
        expect(newUser.name).toBe('Bea O-Problem');
        expect(newUser.email).toBe('bea@email.com');
    });
});