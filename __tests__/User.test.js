const { db, User } = require('../server/models/index.js');

describe('------ User model tests ------', () => {
    beforeAll(async () => {
        await db.sync({force: true});
    });
});