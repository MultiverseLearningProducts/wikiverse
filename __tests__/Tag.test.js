const { db, Tag } = require('../server/models/index.js');
const { tags } = require('../server/seedData.js');

describe('------ Tag model tests ------', () => {
    beforeAll(async () => {
        await db.sync({force: true});
    });

    it('can create a Tag', async () => {
        const newTag = await Tag.create(tags[2]);
        expect(newTag.name).toBe('canpeopledoeverything');
    });
});