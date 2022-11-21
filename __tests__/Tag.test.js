const { db, Tag } = require('../server/models/index.js');
const { tags } = require('../server/seedData.js');

describe('------ Tag model tests ------', () => {
    beforeAll(async () => {
        await db.sync({force: true});
    });
});