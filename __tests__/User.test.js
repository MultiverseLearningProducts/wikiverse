const { db, User } = require('../server/models/index.js');
const { users } = require('../server/seedData.js');

describe('------ User model tests ------', () => {
    beforeAll(async () => {
        await db.sync({force: true});
    });
});