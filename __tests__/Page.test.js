const { db, Page } = require('../server/models/index.js');

describe('------ Page model tests ------', () => {
    beforeAll(async () => {
        await db.sync({force: true});
    });
});