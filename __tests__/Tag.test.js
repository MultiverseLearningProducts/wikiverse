const { db, Tag } = require('../server/models/index.js');

describe('------ Tag model tests ------', () => {
    beforeAll(async () => {
        await db.sync({force: true});
    });
});