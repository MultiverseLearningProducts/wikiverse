const { db, Page } = require('../server/models/index.js');
const { pages } = require('../server/seedData.js');

describe('------ Page model tests ------', () => {
    beforeAll(async () => {
        await db.sync({force: true});
    });
});